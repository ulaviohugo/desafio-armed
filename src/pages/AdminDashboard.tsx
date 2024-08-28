import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const [serviceImage, setServiceImage] = useState<File | null>(null);
  const [serviceText, setServiceText] = useState('');
  const [newsImage, setNewsImage] = useState<File | null>(null);
  const [newsText, setNewsText] = useState('');
  const [highlightImage, setHighlightImage] = useState<File | null>(null);
  const [highlightText, setHighlightText] = useState('');

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Converte o arquivo em uma URL de dados para armazenar no localStorage
    const serviceImageData = serviceImage ? URL.createObjectURL(serviceImage) : null;

    // Salvar no localStorage
    localStorage.setItem('service', JSON.stringify({ serviceImage: serviceImageData, serviceText }));
    console.log('Service Registered:', { serviceImageData, serviceText });
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newsImageData = newsImage ? URL.createObjectURL(newsImage) : null;

    localStorage.setItem('news', JSON.stringify({ newsImage: newsImageData, newsText }));
    console.log('News Registered:', { newsImageData, newsText });
  };

  const handleHighlightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const highlightImageData = highlightImage ? URL.createObjectURL(highlightImage) : null;

    localStorage.setItem('highlight', JSON.stringify({ highlightImage: highlightImageData, highlightText }));
    console.log('Highlight Registered:', { highlightImageData, highlightText });
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="p-4">
      <h1>Admin Dashboard</h1>
      <div className="mt-4">
        <button onClick={handleGoHome} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Início
        </button>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Formulário de Registro de Serviços */}
      <form onSubmit={handleServiceSubmit} className="mt-8">
        <h2>Registrar Serviço</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setServiceImage(e.target.files ? e.target.files[0] : null)}
          className="mb-4"
        />
        <input
          type="text"
          value={serviceText}
          onChange={(e) => setServiceText(e.target.value)}
          placeholder="Texto do Serviço"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
          Registrar Serviço
        </button>
      </form>

      {/* Formulário de Registro de Notícias */}
      <form onSubmit={handleNewsSubmit} className="mt-8">
        <h2>Registrar Notícia</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewsImage(e.target.files ? e.target.files[0] : null)}
          className="mb-4"
        />
        <input
          type="text"
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
          placeholder="Texto da Notícia"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
          Registrar Notícia
        </button>
      </form>

      {/* Formulário de Registro de Destaques */}
      <form onSubmit={handleHighlightSubmit} className="mt-8">
        <h2>Registrar Destaque</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setHighlightImage(e.target.files ? e.target.files[0] : null)}
          className="mb-4"
        />
        <input
          type="text"
          value={highlightText}
          onChange={(e) => setHighlightText(e.target.value)}
          placeholder="Texto do Destaque"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
          Registrar Destaque
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
