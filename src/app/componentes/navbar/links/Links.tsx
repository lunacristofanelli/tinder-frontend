import React, {useState} from "react";
import "./links.css";
import NavLink from "./navLink/navLink";
import {IUser} from "@/app/model/user/IUser";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const links = [
    {
        title: "Home",
        path: "/",
    },
];

const loggedInLinks = [
    {
        title: "Personas",
        path: "/personas",
    },
    {
        title: "Matches",
        path: "/matches",
    },
    {
        title: "Likes",
        path: "/likes",
    },
    {
        title: "Mensajes",
        path: "/mensajes",
    },
]

const adminLinks = [
    {
        title: "Admin",
        path: "/administrador",
    },
]

interface LinksProps {
    user?: IUser
}

interface LinksProps {
    user?: IUser
}
const user: IUser = { email: '', role: ''};

const Links: React.FC = async () => {
    const session = await getServerSession(authOptions);
    //const [open, setOpen] = useState(false);
    return (
        <div className="">
            <div className="links">
                {(!session?.user || session?.user.role !== 'USR') && links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
                {session?.user  && session?.user && session?.user?.role === 'USR' && loggedInLinks.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
                {session?.user  && session?.user && session?.user?.role === 'ADM' && adminLinks.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
                {session?.user ? (<NavLink item={{title: "Logout", path: "/logout"}}/>) : (
                    <NavLink item={{title: "Iniciar sesion", path: "/form"}}/>)}
            </div>

        </div>
    );
};

export default Links;
