import { useState } from 'react';
import { Search, Book, ArrowRight, Bookmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const middleSchoolSubjects = [
  "Buddhism", "Sinhala", "Mathematics", "ICT", "History", "English", 
  "Geography", "Science", "Dancing", "PTS", "Arts", "Music", 
  "Tamil", "Health", "Agriculture", "Civic"
];

const olSubjects = [
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

const grades = [
  { id: 'g6', name: 'Grade 6', type: 'middle' },
  { id: 'g7', name: 'Grade 7', type: 'middle' },
  { id: 'g8', name: 'Grade 8', type: 'middle' },
  { id: 'g9', name: 'Grade 9', type: 'middle' },
  { id: 'g10', name: 'Grade 10', type: 'ol' },
  { id: 'g11', name: 'Grade 11 (O/L)', type: 'ol' },
  { id: 'g12', name: 'Grade 12 (A/L)', type: 'al' },
  { id: 'g13', name: 'Grade 13 (A/L)', type: 'al' }
];

const CourseListing = () => {
  const { t } = useTranslation();
  const [activeGrade, setActiveGrade] = useState('g8');

  // Find the selected grade metadata
  const currentGrade = grades.find(g => g.id === activeGrade);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t('course_title') || 'Discover Courses'}</h1>
          <p className="text-slate-600 mt-2">{t('course_desc') || 'Select your grade to find specific subjects.'}</p>
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

      {/* Grade Selector Pills */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Select Your Grade</h2>
        <div className="flex flex-wrap gap-2">
          {grades.map(grade => (
            <button 
              key={grade.id}
              onClick={() => setActiveGrade(grade.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeGrade === grade.id ? 'bg-primary-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'}`}
            >
              <Bookmark size={16} className={activeGrade === grade.id ? 'text-primary-200' : 'text-slate-400'} />
              {grade.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-slate-800">
          Showing subjects for <span className="text-primary-600">{currentGrade.name}</span>
        </h2>
      </div>

      {/* Middle School Render (Grades 6-9) */}
      {currentGrade.type === 'middle' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {middleSchoolSubjects.map((subject, idx) => (
            <Link to={`/courses?grade=${currentGrade.id}&subject=${subject}`} key={idx} className="bg-white border hover:border-primary-400 hover:shadow-lg rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 transition-all group">
              <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6" />
              </div>
              <span className="font-semibold text-slate-800 group-hover:text-primary-700">{subject}</span>
            </Link>
          ))}
        </div>
      )}

      {/* O/L Render (Grades 10-11) */}
      {currentGrade.type === 'ol' && (
        <div className="space-y-8">
          {olSubjects.map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b flex items-center gap-2">
                <span className="w-2 h-6 bg-primary-500 rounded-full"></span>
                {section.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.subjects.map((sub, sIdx) => (
                  <Link to={`/courses?grade=${currentGrade.id}&subject=${sub}`} key={sIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:bg-primary-50 hover:border-primary-300 hover:shadow-sm transition-all group">
                    <span className="font-medium text-slate-700 group-hover:text-primary-700">{sub}</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* A/L Render (Grades 12-13) */}
      {currentGrade.type === 'al' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alStreams.map((stream, idx) => (
            <Link to={`/courses?grade=${currentGrade.id}&stream=${stream.name}`} key={idx} className="card overflow-hidden hover:-translate-y-1 transition-transform group shadow-md hover:shadow-xl">
              <div className={`h-36 bg-gradient-to-br ${stream.color} flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <span className="text-6xl mb-2 drop-shadow-md">{stream.icon}</span>
                <span className="font-bold text-lg tracking-wide shadow-sm">{stream.name}</span>
              </div>
              <div className="p-4 bg-white text-center">
                <span className="text-primary-600 font-semibold group-hover:underline flex items-center justify-center gap-2">
                  Browse Stream <ArrowRight size={16} />
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
