import './btnIniciarSesion.css';
import Link from 'next/link';

export const IniciarSesion = () => {
  return (
    <div>
      <Link href='/form'>
        <button className='btn'>
          Iniciar Sesion
        </button>
      </Link>
    </div>
  );
}
