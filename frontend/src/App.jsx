import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseListing from './pages/CourseListing';
import LessonPage from './pages/LessonPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import QuizPage from './pages/QuizPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AIChatbot from './components/AIChatbot';

// Route protector function
const ProtectedRoute = ({ children }) => {
  const userInfo = localStorage.getItem('userInfo');
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/courses" element={<ProtectedRoute><CourseListing /></ProtectedRoute>} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/teacher-dashboard" element={<ProtectedRoute><TeacherDashboard /></ProtectedRoute>} />
            <Route path="/quiz/:quizId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          </Routes>
        </main>
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;
