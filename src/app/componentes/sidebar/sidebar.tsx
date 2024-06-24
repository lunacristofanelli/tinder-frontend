'use client';
import React from 'react';
import "./sidebar.css";

interface SidebarProps {
  numMatches: number;
  numMensajes: number;
  onEditarPerfil: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ numMatches, numMensajes, onEditarPerfil }) => {
  return (
    <div className="sidebar">
      <div className="sidebarItem" onClick={onEditarPerfil}>
        <i className="fas fa-user-edit"></i> Editar Perfil
      </div>
      <div className="sidebarItem">
        <i className="fas fa-heart"></i> Matches ({numMatches})
      </div>
      <div className="sidebarItem">
        <i className="fas fa-comments"></i> Mensajes ({numMensajes})
      </div>
    </div>
  );
};

export default Sidebar;
