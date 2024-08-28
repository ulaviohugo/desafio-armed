import React, { useState, useEffect } from 'react';
import './NewsSection.css'; // Importar o arquivo CSS

const NewsSection: React.FC = () => {
  // Estado para armazenar as notícias recuperadas do localStorage
  const [newsData, setNewsData] = useState<{ newsImage: string | null; newsText: string } | null>(null);

  // Efeito para carregar as notícias do localStorage
  useEffect(() => {
    const storedNews = localStorage.getItem('news'); // Recupera os dados de notícias do localStorage
    if (storedNews) {
      setNewsData(JSON.parse(storedNews)); // Converte os dados de JSON para um objeto e armazena no estado
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <section className="news-section">
      <div>
        <h2>Notícias</h2>
        {newsData ? ( // Renderiza as notícias se existirem
          <div className="news-item">
            {newsData.newsImage && <img src={newsData.newsImage} alt="News" className="news-image" />}
            <p>{newsData.newsText}</p>
          </div>
        ) : (
          <p>Não há notícias disponíveis.</p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
