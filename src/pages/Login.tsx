// src/pages/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify'; // Importar a função toast
import './Login.css'; // Importar o arquivo CSS

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'client' | ''>('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // Estado para controlar se o botão de login deve estar ativo
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    // Ativar o botão de login somente se todos os campos estiverem preenchidos
    if (role && username && password) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [role, username, password]);

  const handleLogin = () => {
    const user = { id: '1', role: role as 'admin' | 'client', username }; // Adicione o username ao objeto user

    login(user);

    // Mostrar o toast de sucesso
    toast.success(`Bem-vindo, ${username}`);

    if (user.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <img src="/assets/images/logo.svg" alt="Logo" className="logo-image" />
      </div>
      <div className="form-section">
        <div className="p-4">
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'admin' | 'client' | '')}
              className="mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>Selecione o tipo de usuário</option>
              <option value="client">Cliente</option>
              <option value="admin">Admin</option>
            </select>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mb-2 p-2 border border-gray-300 rounded"
              disabled={!role}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded"
              disabled={!role}
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded ${isButtonActive ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
              disabled={!isButtonActive}
            >
              Iniciar Sessão
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
