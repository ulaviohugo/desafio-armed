import React from 'react';
import './LinksSection.css'; // Importar o arquivo CSS

const LinksSection: React.FC = () => {
  return (
    <section className="links-section">
      <h2>LINKS</h2>
      <div className="links-images">
        <img src="/assets/images/oms.png" alt="Link 2" />
        <img src="/assets/images/thewordbank.png" alt="Link 2" />
        <img src="/assets/images/pnud.png" alt="Link 3" />
        <img src="/assets/images/ofa.svg" alt="Link 4" />
        <img src="/assets/images/of.png" alt="Link 5" />
        <img src="/assets/images/anvisa.png" alt="Link 6" />
        <img src="/assets/images/infarmed.png" alt="Link 7" />
        <img src="/assets/images/inis.png" alt="Link 8" />
      </div>
    </section>
  );
};

export default LinksSection;
