import { Upload, PlusCircle, Video, FileText, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-6">
      {/* Sidebar Navigation */}
      <div className="md:w-64 bg-white border rounded-xl p-4 shadow-sm self-start sticky top-20 hidden md:block">
        <div className="font-bold text-lg mb-6 text-slate-900 border-b pb-4">Teacher Panel</div>
        <nav className="space-y-4">
          <Link to="#" className="flex items-center gap-3 text-primary-600 bg-primary-50 p-2 rounded-lg font-medium">
            <Upload size={20} /> Content Upload
          </Link>
          <Link to="#" className="flex items-center gap-3 text-slate-600 hover:bg-slate-50 p-2 rounded-lg font-medium">
            <Users size={20} /> My Students
          </Link>
          <Link to="#" className="flex items-center gap-3 text-slate-600 hover:bg-slate-50 p-2 rounded-lg font-medium">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </div>

      <div className="flex-grow">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Content Management</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <button className="card p-6 flex flex-col items-center justify-center border-dashed border-2 hover:border-primary-500 hover:bg-primary-50 text-slate-600 hover:text-primary-600 transition-colors h-32">
            <Video size={32} className="mb-2" />
            <span className="font-semibold">Upload Video Lesson</span>
          </button>
          <button className="card p-6 flex flex-col items-center justify-center border-dashed border-2 hover:border-primary-500 hover:bg-primary-50 text-slate-600 hover:text-primary-600 transition-colors h-32">
            <FileText size={32} className="mb-2" />
            <span className="font-semibold">Upload PDF Notes</span>
          </button>
          <button className="card p-6 flex flex-col items-center justify-center border-dashed border-2 hover:border-primary-500 hover:bg-primary-50 text-slate-600 hover:text-primary-600 transition-colors h-32">
            <PlusCircle size={32} className="mb-2" />
            <span className="font-semibold">Create New Quiz</span>
          </button>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-4">Your Recent Uploads</h2>
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Kinematics Part 1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 flex items-center gap-2"><Video size={16} /> Video</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2026-03-24</td>
                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">Published</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Past Paper 2022 marking</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 flex items-center gap-2"><FileText size={16} /> PDF Notes</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2026-03-23</td>
                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">Published</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
