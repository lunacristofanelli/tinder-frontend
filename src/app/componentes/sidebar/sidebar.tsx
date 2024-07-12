'use client';
import React from 'react';
import "./sidebar.css";

interface SidebarProps {
  numMatches: number;
  onEditarPerfil: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ numMatches, onEditarPerfil }) => {
  return (
    <div className="sidebar">
      <div className="sidebarItem" onClick={onEditarPerfil}>
        <i className="fas fa-user-edit"></i> Editar Perfil
      </div>
      <div className="sidebarItem">
        <i className="fas fa-heart"></i> Matches ({numMatches})
      </div>

    </div>
  );
};

export default Sidebar;
