import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseListing from './pages/CourseListing';
import LessonPage from './pages/LessonPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import QuizPage from './pages/QuizPage';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseListing />} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
          </Routes>
        </main>
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;
