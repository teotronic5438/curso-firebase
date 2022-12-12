import React from 'react'
import logo from '../../logo.svg';
const Navbar = () => {
  return (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Curso de <code>Firebase</code></p>
            <a
            className="App-link"
            href="https://firebase.google.com/docs/web/setup?authuser=0&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            >
            Documentacion
            </a>
      </header>
    </div>
  )
}

export default Navbar
