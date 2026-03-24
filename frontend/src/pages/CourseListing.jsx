import { Search, Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const courses = [
  { id: 1, title: 'A/L Combined Mathematics', teacher: 'Prasanna Kumara', language: 'Sinhala', students: 1200, category: 'A/L' },
  { id: 2, title: 'O/L Science (English Medium)', teacher: 'Sarah Fernando', language: 'English', students: 850, category: 'O/L' },
  { id: 3, title: 'A/L Physics past paper class', teacher: 'Amila Perera', language: 'Sinhala', students: 2000, category: 'A/L' },
  { id: 4, title: 'A/L Chemistry', teacher: 'S. Ramanathan', language: 'Tamil', students: 600, category: 'A/L' },
];

const CourseListing = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t('course_title')}</h1>
          <p className="text-slate-600 mt-2">{t('course_desc')}</p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder={t('course_search')} 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-64 bg-white"
            />
          </div>
          <button className="btn-secondary flex items-center gap-2">
            <Filter size={18} />
            {t('course_filter')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card flex flex-col cursor-pointer hover:border-primary-300">
            <div className="h-40 bg-slate-200 flex items-center justify-center relative bg-gradient-to-r from-primary-400 to-primary-600">
              <BookOpen className="h-12 w-12 text-white opacity-80" />
              <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                {course.category}
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{course.language} {t('course_medium')}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{course.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{t('course_by')} {course.teacher}</p>
              
              <div className="mt-auto pt-4 border-t flex justify-between items-center text-sm text-slate-500">
                <span>{course.students.toLocaleString()} {t('course_students')}</span>
                <Link to={`/courses/${course.id}/lesson/1`} className="text-primary-600 font-semibold hover:text-primary-700">{t('course_view')}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
