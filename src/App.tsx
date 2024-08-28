// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota de Login não precisa de proteção */}
          <Route path="/login" element={<Login />} />

          {/* Rota Home, acessível por 'admin' e 'client' */}
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} roles={['admin', 'client']} />}
          />

          {/* Rota AdminDashboard, acessível apenas por 'admin' */}
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute element={<AdminDashboard />} roles={['admin']} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
