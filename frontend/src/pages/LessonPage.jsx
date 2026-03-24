import { PlayCircle, FileText, CheckCircle, Video } from 'lucide-react';

const LessonPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-6">
      {/* Video Content Area */}
      <div className="flex-grow lg:w-2/3">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Unit 1: Mechanics - Kinematics</h1>
        
        {/* Fake Video Player */}
        <div className="w-full aspect-video bg-slate-900 rounded-xl flex items-center justify-center relative shadow-lg group">
          <PlayCircle className="absolute text-white/80 h-20 w-20 group-hover:scale-110 transition-transform cursor-pointer" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur px-4 py-2 rounded flex justify-between items-center text-white text-sm">
            <span>00:00 / 45:30</span>
            <div className="flex gap-4">
              <span className="cursor-pointer">HD</span>
              <span className="cursor-pointer">Fullscreen</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold mb-2">Lesson Notes</h2>
          <p className="text-slate-600 mb-4 whitespace-pre-line text-sm leading-relaxed">
            In this lesson, we will cover the basics of kinematics focusing on linear motion at constant acceleration. We solve 10 past paper questions from 2018-2022.
          </p>
          <div className="flex gap-4">
            <button className="btn-secondary flex items-center gap-2 text-sm">
              <FileText size={16} /> Download PDF Notes
            </button>
            <button className="btn-secondary flex items-center gap-2 text-sm text-emerald-600 border-emerald-200 bg-emerald-50">
              <CheckCircle size={16} /> Mark as Complete
            </button>
          </div>
        </div>
      </div>

      {/* Playlist / Lesson Navigation Area */}
      <div className="lg:w-1/3">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 sticky top-20">
          <div className="p-4 border-b">
            <h3 className="font-bold text-lg">Course Content</h3>
            <p className="text-sm text-slate-500">2 / 12 lessons completed</p>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div className="flex flex-col max-h-[500px] overflow-y-auto">
            {/* Active Class Item */}
            <div className="p-4 flex gap-3 border-l-4 border-primary-500 bg-primary-50 cursor-pointer">
              <div className="pt-1"><Video size={20} className="text-primary-600" /></div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">1. Kinematics Introduction</p>
                <p className="text-xs text-primary-600/80">45 mins</p>
              </div>
            </div>
            {/* Inactive Item */}
            <div className="p-4 flex gap-3 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer">
              <div className="pt-1"><Video size={20} className="text-slate-400" /></div>
              <div>
                <p className="font-medium text-slate-700 text-sm">2. Projectile Motion</p>
                <p className="text-xs text-slate-500">52 mins</p>
              </div>
            </div>
            {/* Completed Item */}
            <div className="p-4 flex gap-3 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer">
              <div className="pt-1"><CheckCircle size={20} className="text-emerald-500" /></div>
              <div>
                <p className="font-medium text-emerald-700 text-sm">3. Basic Concepts Recap</p>
                <p className="text-xs text-slate-500">10 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
