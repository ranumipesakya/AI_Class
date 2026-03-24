import { useState } from 'react';
import { Search, Book, ArrowRight, Bookmark, Image as ImageIcon } from 'lucide-react';
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
  { name: "Bio Science", icon: "🧬", color: "from-emerald-400 to-emerald-600", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&q=80" },
  { name: "Physical Science (Maths)", icon: "📐", color: "from-blue-400 to-blue-600", image: "https://images.unsplash.com/photo-1509228468518-1ea51ce08906?w=600&h=400&fit=crop&q=80" },
  { name: "Commerce", icon: "📊", color: "from-amber-400 to-amber-600", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" },
  { name: "Art", icon: "🎨", color: "from-violet-400 to-violet-600", image: "https://images.unsplash.com/photo-1544640808-32cb4f68eb90?w=600&h=400&fit=crop&q=80" }
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

// AI Helper to fetch a relevant high quality image based on the subject name
const getSubjectImage = (subject) => {
  const s = subject.toLowerCase();
  if (s.includes('math')) return 'https://images.unsplash.com/photo-1509228468518-1ea51ce08906?w=400&h=300&fit=crop&q=80';
  if (s.includes('science') || s.includes('bio') || s.includes('chem') || s.includes('physic')) return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&q=80';
  if (s.includes('ict') || s.includes('comput') || s.includes('tech') || s.includes('electronic')) return 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop&q=80';
  if (s.includes('history') || s.includes('civic')) return 'https://images.unsplash.com/photo-1461360228753-45a16757c2c2?w=400&h=300&fit=crop&q=80';
  if (s.includes('geography')) return 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400&h=300&fit=crop&q=80';
  if (s.includes('art') || s.includes('dance') || s.includes('music') || s.includes('drama') || s.includes('natyam')) return 'https://images.unsplash.com/photo-1514320291840-2e0a9ca66415?w=400&h=300&fit=crop&q=80';
  if (s.includes('agri') || s.includes('environment')) return 'https://images.unsplash.com/photo-1586771107445-d7afcb84e1ed?w=400&h=300&fit=crop&q=80';
  if (s.includes('buddh') || s.includes('religion') || s.includes('catholic') || s.includes('islam') || s.includes('hindu')) return 'https://images.unsplash.com/photo-1604882583279-37326eeb6f15?w=400&h=300&fit=crop&q=80';
  if (s.includes('english') || s.includes('sinhala') || s.includes('tamil') || s.includes('language') || s.includes('french') || s.includes('chinese') || s.includes('pali') || s.includes('sanskrit')) return 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop&q=80';
  if (s.includes('business') || s.includes('commer') || s.includes('account') || s.includes('entrepreneur')) return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80';
  if (s.includes('home') || s.includes('health') || s.includes('design')) return 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop&q=80';
  return 'https://images.unsplash.com/photo-1522204523326-0686920b12bc?w=400&h=300&fit=crop&q=80';
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {middleSchoolSubjects.map((subject, idx) => (
            <Link to={`/subject/${currentGrade.id}/${subject}`} key={idx} className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex flex-col h-56">
              <div className="h-32 w-full relative overflow-hidden bg-slate-200">
                <img src={getSubjectImage(subject)} alt={subject} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between flex-grow">
                <span className="font-bold text-slate-800 group-hover:text-primary-600 text-lg">{subject}</span>
                <div className="bg-primary-50 p-2 rounded-full text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* O/L Render (Grades 10-11) */}
      {currentGrade.type === 'ol' && (
        <div className="space-y-10">
          {olSubjects.map((section, idx) => (
            <div key={idx} className="">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                {section.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.subjects.map((sub, sIdx) => (
                  <Link to={`/subject/${currentGrade.id}/${sub}`} key={sIdx} className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex flex-col h-48">
                    <div className="h-28 w-full relative overflow-hidden bg-slate-200">
                      <img src={getSubjectImage(sub)} alt={sub} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    </div>
                    <div className="p-4 bg-white flex items-center justify-between flex-grow">
                      <span className="font-bold text-slate-800 group-hover:text-primary-600 flex-1 leading-tight text-sm pr-2">{sub}</span>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-600 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* A/L Render (Grades 12-13) */}
      {currentGrade.type === 'al' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {alStreams.map((stream, idx) => (
            <Link to={`/subject/${currentGrade.id}/${stream.name}`} key={idx} className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-100 relative h-64 flex items-end">
              <img src={stream.image} alt={stream.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute inset-0 bg-gradient-to-t ${stream.color} opacity-80 mix-blend-multiply`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="p-8 relative z-10 w-full flex items-center justify-between">
                <div>
                  <span className="text-5xl mb-3 block drop-shadow-lg opacity-90">{stream.icon}</span>
                  <h3 className="font-extrabold text-3xl text-white drop-shadow-md">{stream.name}</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-slate-900 transition-colors flex items-center gap-2">
                  Explore <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseListing;
