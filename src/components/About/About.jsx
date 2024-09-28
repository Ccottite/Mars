import './About.css'
import about_img from '../../assets/lobomascota.png'
//import play_icon from '../../assets/play_icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
            </div>
            <div className="about-right">
                <h3>Sobre Nosotros</h3>
                <h2>+20 Años de trayectoria</h2>
                <p>
                    Somos una empresa especializada en la distribución y comercio de productos para la industria textil.
                    Nos dedicamos a ofrecer una amplia gama de artículos de alta calidad, siempre a los mejores precios del mercado.
                    <br />
                    <br />
                    Nuestro compromiso es mantenernos a la vanguardia en el sector, adoptando políticas de competencia que nos permitan garantizar
                    la satisfacción total de nuestros clientes. Nos esforzamos por establecer relaciones de confianza y brindar un servicio excepcional,
                    adaptándonos a las necesidades de cada cliente y contribuyendo al éxito de sus proyectos textiles.
                </p>
            </div>
        </div>
    )
}

export default About
