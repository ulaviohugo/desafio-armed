import React from 'react';
import './Footer.css'; // Importar o arquivo CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer text-xs flex justify-between">
      <p>© 2024 Seu Site. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
