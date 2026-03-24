import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Ayubowan! How can I help you with your studies today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');
    
    // Simulate AI thinking and replying
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: `I can help you understand "${currentInput}". According to the local syllabus, here's a simple explanation...` 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-xl border border-primary-100 w-80 sm:w-96 flex flex-col overflow-hidden h-96">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <div className="font-semibold flex items-center gap-2">
              <MessageSquare size={18} />
              Sithuru AI Tutor
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary-700 p-1 rounded-full text-white">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 max-w-[85%] rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-white border rounded-tl-none text-slate-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-500 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-primary-600 text-white p-2 text-sm rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center relative group"
        >
          <MessageSquare size={28} />
          <span className="absolute -top-12 right-0 bg-white text-primary-900 border px-3 py-1 rounded-lg text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI Tutor
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
