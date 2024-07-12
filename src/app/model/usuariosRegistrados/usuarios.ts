interface Usuarios {
    usuarioID:number,
    matchID: number;
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    ubicacion : string,
    profesion: string,
    sobreMi: string,
    intereses: string[],
    imagenes: string[],
    misRedes: string
  };

export default Usuarios;