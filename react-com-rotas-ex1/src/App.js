import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Página Index</h1>
        <p>
          Aprendendo a criar rotas no React!
        </p>
        
        <Link to="/sobre">Sobre</Link>
        
      </header>
    </div>
  );
}

export default App;
