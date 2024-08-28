import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { BsInfoCircleFill } from "react-icons/bs";
import { MdContentPasteSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Importar o arquivo CSS
// import { ReactComponent as Logo } from "../../assets/images/logo.svg"; // Importar o SVG como um componente React

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav className="navbar">
      <img src='/assets/images/logo.svg' className="navbar-logo" />
      <ul className="navbar-menu">
        <li>
          <a href="#home">INÍCIO</a>
        </li>
        <li>
          <a href="#services">SOBRE NÓS</a>
        </li>
        <li>
          <a href="#contact">FARMACOVILÂNCIA</a>
        </li>
        <li>
          <a href="#documents">LEGISLAÇÃO E DOCUMENTOS</a>
        </li>
        <li>
          <a href="#contact">CONTACTOS</a>
        </li>
      </ul>
      <div className="navbar-social-icons">
        <MdContentPasteSearch size={24} />
        <IoLogoFacebook size={24} />
        <IoLogoInstagram size={24} />
        <IoLogoLinkedin size={24} />
      </div>
      <button
        onClick={handleLogout}
        className="navbar-logout"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
