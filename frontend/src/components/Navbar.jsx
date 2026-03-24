import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, User, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-primary-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-primary-900 hidden sm:block">LankaEduHub</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/courses" className="text-slate-600 hover:text-primary-600 font-medium">Courses</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 font-medium">Dashboard</Link>
            <div className="flex items-center gap-2 text-sm text-slate-500 border-l pl-4">
              <span>EN</span> | <span>සිං</span> | <span>தமி</span>
            </div>
            
            {userInfo ? (
              <button onClick={handleLogout} className="btn-secondary flex items-center gap-2 text-red-600 hover:bg-red-50 border-red-200">
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn-primary flex items-center gap-2">
                <User size={18} />
                Login
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/courses" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/dashboard" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Dashboard</Link>
            
            {userInfo ? (
              <button onClick={handleLogout} className="btn-secondary w-full mt-2 text-red-600">Logout</button>
            ) : (
              <Link to="/login" className="btn-primary flex justify-center w-full mt-2" onClick={() => setIsOpen(false)}>Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
