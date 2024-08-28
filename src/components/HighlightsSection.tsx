import React, { useState, useEffect } from 'react';
import './HighlightsSection.css'; // Importar o arquivo CSS

const HighlightsSection: React.FC = () => {
  // Estado para armazenar os destaques recuperados do localStorage
  const [highlightData, setHighlightData] = useState<{ highlightImage: string | null; highlightText: string } | null>(null);

  // Efeito para carregar os destaques do localStorage
  useEffect(() => {
    const storedHighlight = localStorage.getItem('highlight'); // Recupera os dados de destaques do localStorage
    if (storedHighlight) {
      setHighlightData(JSON.parse(storedHighlight)); // Converte os dados de JSON para um objeto e armazena no estado
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <section className="highlights-section">
      <div className="highlights-content">
        <h1>Destaques</h1>
        {highlightData ? ( // Renderiza os destaques se existirem
          <div className="highlight-item">
            {highlightData.highlightImage && <img src={highlightData.highlightImage} alt="Highlight" className="highlight-image" />}
            <p>{highlightData.highlightText}</p>
          </div>
        ) : (
          <p>Não há destaques disponíveis.</p>
        )}
      </div>
    </section>
  );
};

export default HighlightsSection;
