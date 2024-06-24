'use client';

import React, { useState, useEffect } from 'react';
import Usuarios from "@/app/model/usuariosRegistrados/usuarios";
import "./cardUsuarios.css";
import Carousel from 'react-bootstrap/Carousel';

interface CardUsuariosProps {
  datos: Usuarios[];
}

const CardUsuarios: React.FC<CardUsuariosProps> = ({ datos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntereses, setShowIntereses] = useState(false);
  const handleLike = () => {
    console.log('Me gusta');
    nextCard();
  };

  const handleSuperLike = () => {
    console.log('Super Like');
    nextCard();
  };

  const handleNope = () => {
    console.log('Nope');
    nextCard();
  };

  const handleRewind = () => {
    console.log('Rewind');
    prevCard();
  };

  const nextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % datos.length);
  };

  const prevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + datos.length) % datos.length);
  };

  useEffect(() => {
    if (datos.length > 0 && currentIndex >= datos.length) {
      setCurrentIndex(0);
    }
  }, [datos, currentIndex]);

  if (datos.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  const toggleIntereses = () => {
    setShowIntereses(!showIntereses);
  };

  return (
    <div className="pageContainer">
      <div className="cardUsuarios">
        <div className="cardsContainer">
          {datos[currentIndex] && datos[currentIndex].imagen && (
            <div className="containerImgCards">
              <Carousel interval={null} indicators={false} controls={true}>
                {datos[currentIndex].imagen.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={img}
                      className="imgCard"
                      alt={`${datos[currentIndex].nombreCompleto} imagen ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="infoOverlay">
                <p>{datos[currentIndex].nombreCompleto}</p>
                <p>{datos[currentIndex].sobreMi}</p>
              </div>
            </div>
          )}
          <button className="btnMostrarIntereses" onClick={toggleIntereses}>
            {showIntereses ? 'Ocultar Intereses' : 'Mostrar Intereses'}
          </button>
          {showIntereses && (
            <div className="divIntereses">
              <p>{datos[currentIndex].interesesUno}</p>
              <p>{datos[currentIndex].interesesDos}</p>
              <p>{datos[currentIndex].interesesTres}</p>
              <p>{datos[currentIndex].interesesCuatro}</p>
              <p>{datos[currentIndex].interesesCinco}</p>
            </div>
          )}
          <div className="containerBtnAcciones">
            <button className="accion-btn rewind-btn" onClick={handleRewind}>
              <i className="fas fa-undo"></i>
            </button>
            <button className="accion-btn nope-btn" onClick={handleNope}>
              <i className="fas fa-times"></i>
            </button>
            <button className="accion-btn superlike-btn" onClick={handleSuperLike}>
              <i className="fas fa-star"></i>
            </button>
            <button className="accion-btn like-btn" onClick={handleLike}>
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUsuarios;
