import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function Sobre() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Página de Sobre</h1>
        <p>
          Oi. Meu nome é Bee!
        </p>
        <Link to="/">Voltar</Link>
      </header>
    </div>
  );
}

export default Sobre;
