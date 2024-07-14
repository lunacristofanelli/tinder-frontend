import Link from "next/link"
import Links from "./links/Links"
import "./navbar.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC<any> = () => {
  return (
    <div className="nbContainer">
        <Link href="/"><FontAwesomeIcon icon={faFireAlt} className="icon"/></Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Header;