"use client"
import React from "react";
import { Logo } from "@/app/componentes/Logo/logo";
import { Footer } from "@/app/componentes/Footer/footer";
import "./page.css";
import { Form } from "@/app/componentes/form/formInicio";

export default function FormHome() {
  return (
    <>
      <body>
        <header>
            <Logo></Logo>
        </header>

        <main> 
            <Form></Form>
        </main>
          <Footer></Footer>
      </body>
    </>
  )
}