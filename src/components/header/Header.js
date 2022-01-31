import "./Header.css"
import NavBar from "./NavBar"
import React from "react";



const Header = (props) => {
    return(
        <>
        <NavBar/>
        <h1>{props.title}</h1>
        
        </>
    )
}
export default Header;