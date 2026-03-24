import { ArrowRight, BookOpen, Video, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Empower Your Future with <span className="text-primary-600 block sm:inline">LankaEduHub</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 mb-10">
            A comprehensive learning platform for Sri Lankan students. Master your A/L and O/L syllabuses with expert teachers, past papers, quizzes, and our intelligent AI tutor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses" className="btn-primary text-lg px-8 py-3 flex items-center justify-center gap-2">
              Browse Courses <ArrowRight size={20} />
            </Link>
            <Link to="/dashboard" className="btn-secondary text-lg px-8 py-3">
              Student Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We provide all the tools you need to succeed in your examinations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-primary-500" />}
              title="Comprehensive Materials"
              desc="PDF notes, syllabus guides, and past papers with marking schemes."
            />
            <FeatureCard 
              icon={<Video className="h-8 w-8 text-primary-500" />}
              title="Video Lessons"
              desc="High-quality recorded explanations from top island teachers."
            />
            <FeatureCard 
              icon={<Target className="h-8 w-8 text-primary-500" />}
              title="Interactive Quizzes"
              desc="Test your knowledge with real-time scoring and analytics."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-primary-500" />}
              title="Multi-language Support"
              desc="Learn comfortably in Sinhala, Tamil, or English."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="card p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
);

export default Home;
