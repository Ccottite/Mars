import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/iconos/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo_lobo" className='logo' />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
                <li><Link to='about' smooth={true} offset={-100} hashSpy={true} duration={500}>Nosotros</Link></li>
                <li><Link to='servicios' smooth={true} offset={-275} duration={500}>Productos</Link></li>
                <li><Link to='maps' smooth={true} offset={-295} duration={500}>Ubicaciones</Link></li>
                <li><Link to='items' smooth={true} offset={-320} duration={500}>Articulos</Link></li>
                <li><Link to='' smooth={true} offset={-380} duration={500}>Promociones</Link></li>
                <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contactanos</Link></li>
            </ul>
            <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar
