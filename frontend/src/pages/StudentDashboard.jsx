import { Book, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StudentDashboard = () => {
  const userInfo = localStorage.getItem('userInfo');
  const user = userInfo ? JSON.parse(userInfo) : null;
  const firstName = user?.name ? user.name.split(' ')[0] : 'Student';
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{t('dash_welcome')}, {firstName}!</h1>
        <p className="text-slate-600 mt-2">{t('dash_subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="card p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <Book className="h-8 w-8 text-blue-200 mb-4" />
          <h3 className="text-3xl font-bold mb-1">4</h3>
          <p className="text-blue-100 font-medium tracking-wide">{t('dash_enrolled')}</p>
        </div>
        <div className="card p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <Award className="h-8 w-8 text-emerald-200 mb-4" />
          <h3 className="text-3xl font-bold mb-1">12</h3>
          <p className="text-emerald-100 font-medium tracking-wide">{t('dash_quizzes')}</p>
        </div>
        <div className="card p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white">
          <Clock className="h-8 w-8 text-violet-200 mb-4" />
          <h3 className="text-3xl font-bold mb-1">35h</h3>
          <p className="text-violet-100 font-medium tracking-wide">{t('dash_time')}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{t('dash_continue')}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Course Card */}
        <div className="card flex flex-col sm:flex-row shadow-sm hover:shadow-md border-primary-100">
          <div className="w-full sm:w-1/3 h-32 sm:h-auto bg-primary-100 flex items-center justify-center">
            <Book className="h-10 w-10 text-primary-400" />
          </div>
          <div className="p-5 flex-grow">
            <h3 className="font-bold text-lg mb-1">A/L Combined Mathematics</h3>
            <p className="text-sm text-slate-500 mb-3">Unit 1: Mechanics - Kinematics</p>
            <div className="flex items-center gap-4">
              <div className="w-full bg-slate-100 h-2 rounded-full relative">
                <div className="absolute top-0 left-0 bg-primary-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-xs font-semibold text-primary-700">45%</span>
            </div>
            <div className="mt-4 flex justify-end">
              <Link to="/courses/1/lesson/1" className="btn-primary text-sm py-1.5 px-3">
                {t('dash_resume')}
              </Link>
            </div>
          </div>
        </div>

        {/* Recently Added Quiz or Paper */}
        <div className="card p-5 border-yellow-100 bg-yellow-50/30 w-full flex flex-col justify-center">
          <div className="flex items-start gap-4">
             <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
               <Award size={24} />
             </div>
             <div>
               <h3 className="font-bold text-lg">{t('dash_new_quiz')}</h3>
               <p className="text-sm text-slate-600 mt-1">{t('dash_quiz_desc')}</p>
               <Link to="/quiz/1" className="text-primary-600 font-semibold text-sm mt-3 flex items-center gap-1 hover:text-primary-800">
                 {t('dash_start_quiz')} <ArrowRight size={16} />
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
