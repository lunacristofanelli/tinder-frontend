'use client';

import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
<<<<<<< HEAD
import Sidebar from '@/app/componentes/sidebar/sidebar';
=======
>>>>>>> a63418c14e1fd3d3950499a72befd1a4a86e6053

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, setUserData } = useContext(UserContext);
  const router = useRouter();

<<<<<<< HEAD
  const logout = (): void => {
    localStorage.removeItem("accessToken");
    setUserData(undefined);
    router.push("/");
  };

  const goToProfile = (): void => {
    router.push("/editar-perfil");
  };

  return (
    <>
      <header className="header">
        <div className="user-info">
          <span>{userData?.email}</span>
          <img
            src="/imagenes/miPerfil/Perfil.jpg"
            alt="Mi Perfil"
            className="perfil-imagen"
            onClick={goToProfile}
          />
          <Sidebar
            numMatches={10} 
            numMensajes={5}
            onEditarPerfil={goToProfile} 
          />
          <button className="btn btn-logout" onClick={logout}>Cerrar Sesión</button>
        </div>
      </header>
      <div className="content">
        {children}
      </div>
    </>
  );
}
=======
  const logout = ():void => {
    localStorage.removeItem("accessToken");
    setUserData(undefined);
    router.push("/");
  }
  return (
    <>
    <header className="header">

          <div className="user-info">
              <span>{userData?.email}</span>
              <button className="btn btn-logout" onClick={() => logout()}>Cerrar Sesión</button>
          </div>
      </header>
      {children}
      </>
    );
}
    
>>>>>>> a63418c14e1fd3d3950499a72befd1a4a86e6053
