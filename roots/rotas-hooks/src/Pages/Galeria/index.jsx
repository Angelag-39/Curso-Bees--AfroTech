import React from "react";
import "./Galeria.css"
import Imagem from "../../Componentes/Imagem/Imagem";
import ada from "../../assets/ada.jpg"
import logo from "../../assets/logo.svg"

function Galeria() {
    return (
        <div>
            <Imagem local={ada} texto="ada" />
            <Imagem local={logo} texto="logo" />
        </div>
    );
}
export default Galeria;