import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css'; 

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/editar-perfil');
  };

  return (
    <header className="header">
      <img
        src="public/imagenes/miPerfil/Perfil.jpg" 
        alt="Mi Perfil"
        className="perfil-imagen"
        onClick={handleProfileClick}
      />
    </header>
  );
};

export default Header;
