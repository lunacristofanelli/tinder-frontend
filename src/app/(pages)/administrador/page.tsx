<<<<<<< HEAD
import React from 'react';
import CardUsuarios from '@/app/componentes/cardUsuarios/cardUsuarios';
import Usuarios from "@/app/model/usuariosRegistrados/usuarios";

const usuarios: Usuarios[] = [
  {
    id: 1,
    nombreCompleto: 'Juan Perez',
    edad: 28,
    ubicacion: 'Ciudad de México, México',
    profesion: 'Ingeniero de Software',
    sobreMi: 'Amo la naturaleza y los deportes al aire libre.',
    interesesUno: 'Senderismo',
    interesesDos: 'Modelaje',
    interesesTres: 'Fotografía',
    interesesCuatro: 'Viajes',
    interesesCinco: 'Cocina',
    imagen: [
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 1.jpeg',
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 2.jpeg',
      '/imagenes/imagenesUsuarios/juanPerez/Juan Perez 3.jpeg'
    ],
    misRedes: '@juanperez2'
  },
  {
    id: 2,
    nombreCompleto: 'Ana López',
    edad: 25,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Diseñadora Gráfica',
    sobreMi: 'Apasionada por la lectura y la cocina gourmet.',
    interesesUno: 'Lectura',
    interesesDos: 'Cocina',
    interesesTres: 'Viajes',
    interesesCuatro: 'Arte',
    interesesCinco: 'Música',
    imagen: [
      '/imagenes/imagenesUsuarios/anaLopez/Ana Lopez 1.jpeg',
      '/imagenes/imagenesUsuarios/anaLopez/Ana Lopez 2.jpeg',
      '/imagenes/imagenesUsuarios/anaLopez/Ana Lopez 3.jpeg'
    ],
    misRedes: '@analopez'
  },
  {
    id: 3,
    nombreCompleto: 'Hernan Rigi',
    edad: 32,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Actor',
    sobreMi: 'Enamorado de los paisajes, la naturaleza me guia',
    interesesUno: 'Lectura',
    interesesDos: 'Cocina',
    interesesTres: 'Viajes',
    interesesCuatro: 'Arte',
    interesesCinco: 'Música',
    imagen: [
      '/imagenes/imagenesUsuarios/hernanRigi/Hernan Rigi 1.jpeg',
      '/imagenes/imagenesUsuarios/hernanRigi/Hernan Rigi 2.jpeg',
      '/imagenes/imagenesUsuarios/hernanRigi/Hernan Rigi 3.jpeg'
    ],
    misRedes: '@rigihernan'
  },
  {
    id: 4,
    nombreCompleto: 'Lucia Garcia',
    edad: 24,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Estudiante de gastronomia',
    sobreMi: 'La vida es para vivirla, la comida es para vivirla mejor',
    interesesUno: 'Lectura',
    interesesDos: 'Cocina',
    interesesTres: 'Viajes',
    interesesCuatro: 'Arte',
    interesesCinco: 'Música',
    imagen: [
      '/imagenes/imagenesUsuarios/luciaGarcia/Lucia Garcia 1.jpeg',
      '/imagenes/imagenesUsuarios/luciaGarcia/Lucia Garcia 2.jpeg',
      '/imagenes/imagenesUsuarios/luciaGarcia/Lucia Garcia 3.jpeg'
    ],
    misRedes: '@lu_garcia'
  },
  {
    id: 5,
    nombreCompleto: 'Martin Delly',
    edad: 30,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Abogado',
    sobreMi: 'Nada como compartir la vida con un ser de cuatro patas, me divierten las motos y ver deportes extremos',
    interesesUno: 'Motocicletas',
    interesesDos: 'Parkour',
    interesesTres: 'Perros',
    interesesCuatro: 'Rock',
    interesesCinco: 'Naturaleza',
    imagen: [
      '/imagenes/imagenesUsuarios/martinDelly/Martin Delly 1.jpeg',
      '/imagenes/imagenesUsuarios/martinDelly/Martin Delly 2.jpeg',
      '/imagenes/imagenesUsuarios/martinDelly/Martin Delly 3.jpeg'
    ],
    misRedes: '@MartinDelly'
  },
  {
    id: 6,
    nombreCompleto: 'Ivo Yang',
    edad: 34,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Barista',
    sobreMi: 'A donde vaya, llevo mis palitos chinos; Amo el café y compartirlo con personas',
    interesesUno: 'Café',
    interesesDos: 'Diseño gráfico',
    interesesTres: 'Comida china',
    interesesCuatro: 'Fotografia',
    interesesCinco: 'Modelaje',
    imagen: [
      '/imagenes/imagenesUsuarios/ivoYang/Ivo Yang 1.jpeg',
      '/imagenes/imagenesUsuarios/ivoYang/Ivo Yang 2.jpeg',
      '/imagenes/imagenesUsuarios/ivoYang/Ivo Yang 3.jpeg'
    ],
    misRedes: '@IvoYang'
  },
  {
    id: 7,
    nombreCompleto: 'Mary Elisabeth Scott',
    edad: 42,
    ubicacion: 'Buenos Aires, Argentina',
    profesion: 'Actriz',
    sobreMi: 'Me gusta reir',
    interesesUno: 'Cerámica',
    interesesDos: 'Teatro',
    interesesTres: 'Comedias y romances',
    interesesCuatro: 'El mar y sus olas',
    interesesCinco: '',
    imagen: [
      '/imagenes/imagenesUsuarios/maryScott/Mary Scott 1.jpeg',
      '/imagenes/imagenesUsuarios/maryScott/Mary Scott 2.jpeg',
      '/imagenes/imagenesUsuarios/maryScott/Mary Scott 3.jpeg'
    ],
    misRedes: '@MaryScottE'
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <CardUsuarios datos={usuarios} />
    </div>
  );
};

export default App;
=======
"use client"
import React from "react";
import { Logo } from "@/app/componentes/Logo/logo";
import { Footer } from "@/app/componentes/Footer/footer";

export default function AdminPage() {
  return (
    <>
      <body>
        <header>
            <Logo></Logo>
        </header>

        <main> 
            <h2>hola administrador</h2>
        </main>
          <Footer></Footer>
      </body>
    </>
  )
}
>>>>>>> a63418c14e1fd3d3950499a72befd1a4a86e6053
