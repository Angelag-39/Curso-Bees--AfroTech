import './App.css';
import BtnContagem from './Components/BtnContagem/BtnContagem';
import React, { useState } from 'react';
import Painel from './Components/Painel/Painel';
import ContagemContext from './Context/ContagemContext';
import Card from './Card';
import Imagem from './Imagem';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import logo from "./logo.svg"


function App() {
  const [contagem,setContagem] = useState(0)
  return (
    <div className="App">
    <ContagemContext.Provider value={{contagem,setContagem}}>
      <BtnContagem/>
      <Painel contagem={contagem}/>
    </ContagemContext.Provider>
    <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/imagem">Imagem</Link>
            </li>
          </ul>
          <hr />
        <div className='teste'>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/imagem' element={<Imagem />} />
          </Routes>
          </div>

          <img src={logo} alt='' />

      </Router>
    </div>
  );
}

export default App;
