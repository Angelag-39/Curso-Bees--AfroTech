import './App.css';
import Header from './Components/Header/Header';
import { FcApproval } from "react-icons/fc";
import Line from './Components/Line/Line';
import Input from './Components/Input/Input';
import Buttons from './Components/Buttons/Buttons';
import Card from './Components/Card/Card';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
     <Header icone={<FcApproval />} titulo="Meu Feed" />
     <Line/>
     <div className='centro'>
    <Input/>
     </div>
     <div className='esquerda'>
      <Buttons texto='Publicar'/>
     </div>
     <Line/>
     <div lassName='centro'>
    <Card imagem={logo}
    titulo="Fulanito"
    texto="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"/>
    <br/>
    <Card imagem={logo}
    titulo="Fulanito"
    texto="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"/>
     </div>
      </div>
  );
}

export default App;