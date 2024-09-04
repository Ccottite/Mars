import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src="" alt="logo_lobo" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Recuerda que!:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, amet?</p>
                </div>
                <div className="box">
                    <h2>Recuerda seguirnos en redes sociales</h2>
                    <div className="redes-sociales">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2024 <b>Hilos Lobo</b> - Todos Los Derechos Reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;
