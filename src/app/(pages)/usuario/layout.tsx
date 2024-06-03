"use client"

import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

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
    }

    return (
        <>
            <header className="header">


            <div className="user-info">
                <span>{userData?.email}</span>
                <button className="btn btn-logout" onClick={() => logout()}>Cerrar Sesión</button>
            </div>
        </header >
            { children }
            </>
    );
}