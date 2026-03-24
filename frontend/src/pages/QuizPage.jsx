import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      text: "What is the SI unit of power?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correct: 1
    },
    {
      id: 2,
      text: "A force is uniquely determined by its magnitude and ___.",
      options: ["Mass", "Velocity", "Direction", "Volume"],
      correct: 2
    },
    {
      id: 3,
      text: "Which of the following describes uniformly accelerated motion?",
      options: ["v = u + at", "F = ma", "W = Fd", "P = mv"],
      correct: 0
    }
  ];

  const handleSelect = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[calc(100vh-64px)] flex flex-col justify-center">
      {!showResult ? (
        <div className="card shadow-lg p-6 sm:p-10 border-primary-100">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h1 className="text-xl font-bold text-slate-800">Physics Quiz: Mechanics</h1>
            <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 leading-snug">
              {questions[currentQuestion].text}
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, idx) => {
              const isCorrect = idx === questions[currentQuestion].correct;
              const isSelected = selectedOption === idx;
              
              let optionClass = "border-slate-200 hover:border-primary-400 hover:bg-primary-50 text-slate-700";
              
              if (isSelected) {
                optionClass = "border-primary-500 bg-primary-50 text-primary-900 font-semibold";
              }

              if (isSubmitted) {
                if (isCorrect) {
                  optionClass = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold";
                } else if (isSelected && !isCorrect) {
                  optionClass = "border-red-500 bg-red-50 text-red-900 font-semibold";
                } else {
                  optionClass = "border-slate-200 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${optionClass}`}
                >
                  <span className="text-lg">{option}</span>
                  {isSubmitted && isCorrect && <CheckCircle className="text-emerald-500 h-6 w-6" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500 h-6 w-6" />}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <Link to="/dashboard" className="text-slate-500 hover:text-slate-700 flex items-center gap-1 font-medium">
              <ArrowLeft size={16} /> Exit
            </Link>
            
            {!isSubmitted ? (
              <button 
                onClick={handleSubmit} 
                disabled={selectedOption === null}
                className={`btn-primary px-6 ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Submit Answer
              </button>
            ) : (
              <button 
                onClick={handleNext} 
                className="btn-primary px-6 flex items-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'} <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="card shadow-lg p-10 text-center border-primary-100 flex flex-col items-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-primary-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Quiz Completed!</h1>
          <p className="text-lg text-slate-600 mb-8">You successfully finished the Mechanics quiz.</p>
          
          <div className="bg-slate-50 border rounded-2xl p-6 w-full max-w-sm mb-8">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Your Score</p>
            <div className="text-6xl font-black text-primary-600">
              {score}<span className="text-3xl text-slate-400">/{questions.length}</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button onClick={() => window.location.reload()} className="btn-secondary">
              Retry Quiz
            </button>
            <Link to="/dashboard" className="btn-primary px-8">
              Back to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
