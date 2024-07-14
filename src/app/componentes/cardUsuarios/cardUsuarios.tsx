'use client'
import React, { useState, useEffect } from 'react';
import Usuarios from "../../model/usuariosRegistrados/usuarios";
import "./cardUsuarios.css";
import Carousel from 'react-bootstrap/Carousel';
import { deleteMatch, superLike } from '../interacciones/interacciones';
import {IUser} from "@/app/model/user/IUser";
import {getLikeableUsers} from "@/app/services/Auth";
import {getLikeables} from "@/app/services/User";

interface CardUsuariosProps {
  user: IUser;
}

const CardUsuarios: React.FC<CardUsuariosProps> =  ({ user }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntereses, setShowIntereses] = useState(false);
  const [datos, setDatos] = useState({});
  const [loading, setLoading] = useState({});
  //const datosx = await getLikeableUsers(user.email);
  useEffect(() => {
    setLoading(true);
    getLikeables(user)
        .then((data) => {
          setDatos(data);
        })
        .finally(() => {
          setLoading(false);
        })
  }, [])
  const handleLike = () => {
    nextCard();
  };

  const handleNope = async (event: React.MouseEvent<HTMLButtonElement>, matchID: number) => {
    event.preventDefault();
    try {
      const response = await deleteMatch(matchID);
      nextCard();
    } catch (error) {
      console.error('Error al eliminar el match:', error);
    }
  };

  const handleRewind = () => {
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
            {datos[currentIndex] && datos[currentIndex].imagenes && (
                <div className="containerImgCards">
                  <Carousel interval={null} indicators={false} controls={true}>
                    {datos[currentIndex]?.imagenes.map((img, index) => (
                        <Carousel.Item key={index}>
                          <img
                              src={img}
                              className="imgCard"
                              alt={`${datos[currentIndex].nombre} imagen ${index + 1}`}
                          />
                        </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="infoOverlay">
                    <p>{datos[currentIndex].nombre}</p>
                    <p>{datos[currentIndex].sobreMi}</p>
                  </div>
                </div>
            )}
            <button className="btnMostrarIntereses" onClick={toggleIntereses}>
              {showIntereses ? 'Ocultar Intereses' : 'Mostrar Intereses'}
            </button>
            {showIntereses && (
                <div className="divIntereses">
                  <p>{datos[currentIndex].intereses}</p>
                </div>
            )}
            <div className="containerBtnAcciones">
              <button className="accion-btn rewind-btn" onClick={handleRewind}>
                <i className="fas fa-undo"></i>
              </button>
              <button
                  className="accion-btn nope-btn"
                  onClick={(event) => handleNope(event, datos[currentIndex].matchID)} // Pasar matchID aquí
              >
                <i className="fas fa-times"></i>
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
