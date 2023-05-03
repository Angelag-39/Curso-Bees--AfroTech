import React from "react";
import "./Galeria.css"
import Imagem from "../../Components/Imagem/Imagem"
import anne from "../../assets/anne.png"
import culpa from "../../assets/culpa.png"

function Galeria(){
    return(
        <div>
            <Imagem local={anne} texto="anne" />
            <Imagem local={culpa} texto="culpa"/>
        </div>
    )
}

export default Galeria;