"use client"
import React from "react";
import { Logo } from "@/app/componentes/Logo/logo";
import { IniciarSesion } from "@/app/componentes/IniciarSesion/btnIniciarSesion";
import { TextoInicio } from "@/app/componentes/TextoInicio/textoInicio";
import "./page.css";

export default function Home() {
    return (
        <>
          <header>
            <div>
              <Logo></Logo>
              <IniciarSesion></IniciarSesion>
            </div>
    
          </header>
    
          <main>
           <TextoInicio></TextoInicio>
          </main>
        </>
      )
}