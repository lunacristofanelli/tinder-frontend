"use client"
import React from "react";
import { Logo } from "@/app/componentes/Logo/logo";
import { Footer } from "@/app/componentes/Footer/footer";


export default function UsuarioPage() {
  return (
    <>
      <body>
        <header>
            <Logo></Logo>
        </header>

        <main> 
            <h2>hola usuario</h2>
        </main>
          <Footer></Footer>
      </body>
    </>
  )
}