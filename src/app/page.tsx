import React from "react";
import TextoInicio from "@/app/componentes/TextoInicio/textoInicio";
import "./page.css";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (session && session?.user?.role === 'USR') redirect('/personas');
    if (session && session?.user?.role === 'ADM') redirect('/administrador');
  return (
        <div>
            <TextoInicio></TextoInicio>
        </div>
  )
}
