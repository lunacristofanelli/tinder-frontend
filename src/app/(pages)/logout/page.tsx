"use client"
import React, {useEffect} from "react";
import "./page.css";
import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";

export default function LogoutPage() {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("accessToken");
        signOut({callbackUrl: "/"})
    }, []);
  return (
      <div className="divContainer">
      </div>
  )
}