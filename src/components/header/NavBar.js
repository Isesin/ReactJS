import "./NavBar.css";
import Logo from "./Logo";
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
     <nav className="Navigation">
      <Logo />
      <ul>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget/>
    </nav>
    </>
  )
};
export default NavBar;



