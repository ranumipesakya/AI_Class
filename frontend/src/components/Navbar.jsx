import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, User, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo');
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
    setIsOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
            <Link to="/courses" className="text-slate-600 hover:text-primary-600 font-medium">{t('navbar_courses')}</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 font-medium">{t('navbar_dashboard')}</Link>
            <div className="flex items-center gap-2 text-sm text-slate-500 border-l pl-4 font-medium">
              <button onClick={() => changeLanguage('en')} className={`hover:text-primary-600 ${i18n.language === 'en' ? 'text-primary-600' : ''}`}>EN</button> | 
              <button onClick={() => changeLanguage('si')} className={`hover:text-primary-600 ${i18n.language === 'si' ? 'text-primary-600' : ''}`}>සිං</button> | 
              <button onClick={() => changeLanguage('ta')} className={`hover:text-primary-600 ${i18n.language === 'ta' ? 'text-primary-600' : ''}`}>தமி</button>
            </div>
            
            {userInfo ? (
              <button onClick={handleLogout} className="btn-secondary flex items-center gap-2 text-red-600 hover:bg-red-50 border-red-200">
                <LogOut size={18} />
                {t('navbar_logout')}
              </button>
            ) : (
              <Link to="/login" className="btn-primary flex items-center gap-2">
                <User size={18} />
                {t('navbar_login')}
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
            <Link to="/courses" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>{t('navbar_courses')}</Link>
            <Link to="/dashboard" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>{t('navbar_dashboard')}</Link>
            
            <div className="flex items-center gap-4 text-sm text-slate-500 py-2 border-y">
              <span>Language:</span>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-primary-600 font-bold' : ''}>EN</button> 
              <button onClick={() => changeLanguage('si')} className={i18n.language === 'si' ? 'text-primary-600 font-bold' : ''}>සිං</button> 
              <button onClick={() => changeLanguage('ta')} className={i18n.language === 'ta' ? 'text-primary-600 font-bold' : ''}>தமி</button>
            </div>

            {userInfo ? (
              <button onClick={handleLogout} className="btn-secondary w-full mt-2 text-red-600">{t('navbar_logout')}</button>
            ) : (
              <Link to="/login" className="btn-primary flex justify-center w-full mt-2" onClick={() => setIsOpen(false)}>{t('navbar_login')}</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
