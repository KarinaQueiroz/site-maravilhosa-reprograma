import React from 'react'
import logo from './logo.png'
import gatinho from './gatinho.jpg'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul className="navbar-links">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="#">Você sabia?</a>
                    </li>
                    <li>
                        <a href="sobre.html">Recicle</a>
                    </li>
                    <li>
                        <a href="perfis.html">Matérias</a>
                    </li>
                    <li>
                        <a href="#">Vale Conhecer</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar