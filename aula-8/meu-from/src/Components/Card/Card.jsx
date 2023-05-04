import React from "react";
import './Card.css';
import Buttons from "../Buttons/Buttons"


function Card(props){
    return(
        <div id="main">
            <div id="perfil-post">
                <div id="imagem">
                    <img src={props.imagem} alt="imagem" />
                </div>
                <div id="texto">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                </div>
            </div>

            <div id="buttons">
                <Buttons texto="Curtir" />
                <Buttons texto="Compartilhar" />
            </div>

        </div>
    );
};

export default Card;