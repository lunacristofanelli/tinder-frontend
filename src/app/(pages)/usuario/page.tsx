'use client';

import React, { useContext, useEffect } from 'react';
import { Logo } from "@/app/componentes/Logo/logo";
import { Footer } from "@/app/componentes/Footer/footer";
import CardUsuarios from "@/app/componentes/cardUsuarios/cardUsuarios";
import Usuarios from "@/app/model/usuariosRegistrados/usuarios";
import { UserContext } from "@/app/context/user.context";
import { likeablesUsers } from '@/app/componentes/interacciones/interacciones';
import { getLikeableUsers, getLikes, postLike, postReject } from '@/app/services/Auth';

const usuarios: Usuarios[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    ubicacion: 'Ciudad de México, México',
    profesion: 'Ingeniero de Software',
    sobreMi: 'Amo la naturaleza y los deportes al aire libre.',
    intereses: [],
    imagenes: [
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 1.jpeg',
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 2.jpeg',
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 3.jpeg',
    ],
    misRedes: '@juanperez2',
    usuarioID: 0,
    matchID: 0,
  },
];

const likeables = getLikeableUsers('admin@tinder.com');
console.log('ver likeables' + likeables);

const likes = postLike(3,8);
console.log('ver likes' + likes);

const reject = postReject(4,5);
console.log('ver reject' + reject);

const likesRecibidos = getLikes(8);
console.log('ver likes' + likesRecibidos);

const UsuarioPage: React.FC = () => {
  const { userData } = useContext(UserContext);
  useEffect(() => {
    console.log('userData', userData);
  }, []);


  return (
    <div>
      <Logo />
      <header></header>
      <main>
        <div className="App">
          <CardUsuarios datos={usuarios} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsuarioPage;
