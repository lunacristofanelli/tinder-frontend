'use client';

import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Sidebar from '@/app/componentes/sidebar/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, setUserData } = useContext(UserContext);
  const router = useRouter();

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
