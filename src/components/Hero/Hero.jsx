import './Hero.css'
import derecha from '../../assets/derecha.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Nosotros somos Hilos Lobo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum quo tempore odit eligendi laborum facere aut labore ullam quasi possimus nobis quos ipsum. Fugiat veniam eligendi voluptatem odit unde?</p>
                <button className='btn'>Descubre más<img src={derecha} alt=""/></button>
            </div>
        </div>
    )
}

export default Hero
