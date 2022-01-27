
import "./NavBar.css"
import CardWidget from  "./CardWidget.js";


const NavBar = (props) => {
    
    return (
        
    <nav className= "Navigation" style={{border: `20px solid ${props.color}`}}> 
        <div>   
        <CardWidget style={{margin: `0px` , padding: `0px`}} /> 
        </div>
        <ul >
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
    
    );
};

export default NavBar;