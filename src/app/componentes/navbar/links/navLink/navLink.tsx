"use client";

import Link from "next/link";
import "./navLink.css";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink: React.FC<{item: any}> = ({item}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      onClick={() => typeof item.onClick === 'function' ? item.onClick : () => {} }
      className={`navContainer ${pathName === item.path ?  'active' : ''
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
