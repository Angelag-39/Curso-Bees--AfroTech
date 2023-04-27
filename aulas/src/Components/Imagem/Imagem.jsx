import "./imagem.css"

function Imagem(props) {
    const itens = props
    return(
        <div>
            <img src={itens.imagem} alt=""></img>
        </div>
    )
    
}
export default Imagem;