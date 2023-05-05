import React from "react"; 
import './Header.css'

function Header(outraCoisa){
    return(
        <header>
            <span>{outraCoisa.icone}</span>
            {outraCoisa.titulo}
        </header>
    );
}

export default Header;