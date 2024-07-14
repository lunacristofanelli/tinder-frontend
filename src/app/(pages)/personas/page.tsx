import React from 'react';
import CardUsuarios from "@/app/componentes/cardUsuarios/cardUsuarios";
import './page.css';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
export default async function UsuarioPage() {
    const session = await getServerSession(authOptions);
  return (
      <div className="uContainer">
        <CardUsuarios user={session?.user}/>
      </div>
  );
};
