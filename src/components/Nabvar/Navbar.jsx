import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src="" alt="logo_lobo" className='logo' />
            <ul>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Hilos</li>
                <li>Cierres</li>
                <li>Refacciones</li>
                <li>Ubicaciones</li>
                <li>Articulos Nuevos</li>
                <li><button className='btn'>Contactanos</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
