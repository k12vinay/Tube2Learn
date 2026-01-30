import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { CourseGenerator } from './pages/CourseGenerator';
import { CourseEditor } from './pages/CourseEditor';
import { CoursePreview } from './pages/CoursePreview';
import { LoginString } from './pages/Login';
import { Register } from './pages/Register';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { PricingPage } from './pages/PricingPage';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginString />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/generator" element={<ProtectedRoute><CourseGenerator /></ProtectedRoute>} />
            <Route path="/editor/:courseId" element={<ProtectedRoute><CourseEditor /></ProtectedRoute>} />
            <Route path="/preview/:courseId" element={<CoursePreview />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;