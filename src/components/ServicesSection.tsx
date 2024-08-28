import React, { useState, useEffect } from 'react';
import './ServicesSection.css'; // Importar o arquivo CSS

const ServicesSection: React.FC = () => {
  // Estado para armazenar os serviços recuperados do localStorage
  const [serviceData, setServiceData] = useState<{ serviceImage: string | null; serviceText: string } | null>(null);

  // Efeito para carregar os serviços do localStorage
  useEffect(() => {
    const storedService = localStorage.getItem('service'); // Recupera os dados de serviços do localStorage
    if (storedService) {
      setServiceData(JSON.parse(storedService)); // Converte os dados de JSON para um objeto e armazena no estado
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <section className="services-section">
      <div>
        <h2>Serviços</h2>
        {serviceData ? ( // Renderiza os serviços se existirem
          <div className="service-item">
            {serviceData.serviceImage && <img src={serviceData.serviceImage} alt="Service" className="service-image" />}
            <p>{serviceData.serviceText}</p>
          </div>
        ) : (
          <p>Não há serviços disponíveis.</p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
