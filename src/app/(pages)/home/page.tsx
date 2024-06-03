"use client"
import React from "react";
import { Logo } from "@/app/componentes/Logo/logo";
import { IniciarSesion } from "@/app/componentes/IniciarSesion/btnIniciarSesion";
import { TextoInicio } from "@/app/componentes/TextoInicio/textoInicio";
import { Footer } from "@/app/componentes/Footer/footer";
import "./page.css";

export default function Home() {
  return (
    <>
      <body>
        <header>
            <Logo></Logo>
            <IniciarSesion></IniciarSesion>
        </header>

        <main>
          <TextoInicio></TextoInicio>
        </main>
          <Footer></Footer>
      </body>
    </>
  )
}