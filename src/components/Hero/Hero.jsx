import './Hero.css'
import derecha from '../../assets/iconos/derecha.png'
import AnimatedText from '../AnimatedText/AnimatedText'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Nosotros somos <span className="animated-text"><AnimatedText /></span></h1>
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
