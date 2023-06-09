import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Header from './pages/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/galeria">Galeria</Link>
          </li>
        </ul>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
        </Routes>

      </Router>


    </div>
  );
}

export default App;
