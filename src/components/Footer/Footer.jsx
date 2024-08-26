import React from 'react';
import './Footer.css';
import logo from '../../assets/logo_lobo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import x from '../../assets/x.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="lobo_logo" />
                </div>
                <div className="footer-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre-nosotros">Sobre Nosotros</a>
                    <a href="#hilos">Hilos</a>
                    <a href="#cierres">Cierres</a>
                    <a href="#refacciones">Refacciones</a>
                    <a href="#ubicaciones">Ubicaciones</a>
                    <a href="#articulos-nuevos">Artículos Nuevos</a>
                    <a href="#contactanos">Contáctanos</a>
                </div>
                <div className="footer-social">
                    <a href="#"><img src={facebook} alt="Facebook" /></a>
                    <a href="#"><img src={instagram} alt="Twitter" /></a>
                    <a href="#"><img src={x} alt="Instagram" /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hilos Lobo. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
