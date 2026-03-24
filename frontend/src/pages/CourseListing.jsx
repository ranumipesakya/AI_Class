import { useState } from 'react';
import { Search, Book, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const grade6to9 = [
  "Buddhism", "Sinhala", "Mathematics", "ICT", "History", "English", 
  "Geography", "Science", "Dancing", "PTS", "Arts", "Music", 
  "Tamil", "Health", "Agriculture", "Civic"
];

const grade10to11 = [
  { category: "Compulsory Subjects (Core)", subjects: ["First Language (Sinhala/Tamil)", "English Language", "Mathematics", "Science", "History", "Religion (Buddhism, Catholic, Islam, Hinduism)"] },
  { category: "Technical/Vocational (Basket 1)", subjects: ["ICT", "Art and Craft", "Home Economics", "Agriculture", "Design & Construction", "Design & Mechanical Tech", "Electronic & Electrical Tech"] },
  { category: "Aesthetics (Basket 2)", subjects: ["Art", "Dancing", "Oriental Music", "Western Music", "Drama & Theatre", "Bharatha Natyam", "Karnatik Music"] },
  { category: "Languages & Humanities (Basket 3)", subjects: ["Business & Accounting", "Geography", "Civic Education", "Entrepreneurship", "Second Language", "Pali", "Sanskrit", "French", "German", "Hindi", "Japanese", "Arabic", "Korean", "Chinese", "Russian", "Media & Mass Communication"] }
];

const alStreams = [
  { name: "Bio Science", icon: "🧬", color: "from-emerald-400 to-emerald-600" },
  { name: "Physical Science (Maths)", icon: "📐", color: "from-blue-400 to-blue-600" },
  { name: "Commerce", icon: "📊", color: "from-amber-400 to-amber-600" },
  { name: "Art", icon: "🎨", color: "from-violet-400 to-violet-600" }
];

const CourseListing = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('6-9');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t('course_title') || 'Discover Courses'}</h1>
          <p className="text-slate-600 mt-2">{t('course_desc') || 'Find the right classes to boost your results.'}</p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder={t('course_search') || 'Search subjects...'} 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-64 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
        <button 
          onClick={() => setActiveTab('6-9')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeTab === '6-9' ? 'bg-primary-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Grade 6 to 9
        </button>
        <button 
          onClick={() => setActiveTab('10-11')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeTab === '10-11' ? 'bg-primary-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Grade 10-11 (O/L)
        </button>
        <button 
          onClick={() => setActiveTab('al')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeTab === 'al' ? 'bg-primary-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Advanced Level (A/L)
        </button>
      </div>

      {/* Tab Content: Grade 6-9 */}
      {activeTab === '6-9' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {grade6to9.map((subject, idx) => (
            <Link to="#" key={idx} className="bg-white border hover:border-primary-400 hover:shadow-lg rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 transition-all group">
              <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6" />
              </div>
              <span className="font-semibold text-slate-800">{subject}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Tab Content: Grade 10-11 */}
      {activeTab === '10-11' && (
        <div className="space-y-10">
          {grade10to11.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.subjects.map((sub, sIdx) => (
                  <Link to="#" key={sIdx} className="bg-white border rounded-lg p-4 flex items-center justify-between hover:border-primary-500 hover:shadow-md transition-all group">
                    <span className="font-medium text-slate-700 group-hover:text-primary-700">{sub}</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: A/L */}
      {activeTab === 'al' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alStreams.map((stream, idx) => (
            <Link to="#" key={idx} className="card overflow-hidden hover:-translate-y-1 transition-transform group">
              <div className={`h-32 bg-gradient-to-r ${stream.color} flex items-center justify-center text-5xl`}>
                {stream.icon}
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl text-slate-900 mb-2">{stream.name}</h3>
                <span className="text-primary-600 font-medium group-hover:underline flex items-center justify-center gap-1">
                  Browse Subjects <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseListing;
