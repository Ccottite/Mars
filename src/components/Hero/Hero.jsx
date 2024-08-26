import './Hero.css'
import derecha from '../../assets/derecha.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Nosotros somos <span> Hilos Lobo</span></h1>
                <p>
                Nuestro objetivo es ser reconocidos por ofrecer un excelente servicio al cliente y productos de alta calidad que satisfagan las necesidades de la industria textil. 
                Contamos con proveedores comprometidos para asegurar una distribución confiable y eficiente.
                </p>
                <button className='btn'>Descubre más<img src={derecha} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
