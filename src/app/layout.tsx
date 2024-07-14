import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "./globals.css";
import Navbar from "@/app/componentes/navbar/Navbar";
import {Footer} from "@/app/componentes/Footer/footer";
import React from "react";
import {UserContextProvider, UserContext} from "@/app/context/user.context";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
      <body>
      <div className="container">
          <Navbar/>
          {children}
          <Footer/>
      </div>
      </body>
      </html>
  );
}