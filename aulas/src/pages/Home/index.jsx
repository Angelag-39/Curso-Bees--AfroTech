import React from "react";
import "./Home.css"
import BoasVindas from "../../Components/BoasVindas/BoasVindas";

function Home(){
    return(
        <div>
            <BoasVindas texto="Ola Mundo" classe="verde" />
        </div>
    );
}
export default Home;