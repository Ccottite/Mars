import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
