import './Servicios.css'
//import hilo_1 from '../../assets/hilo_1.jpg'
//import hilo_2 from '../../assets/hilo_2.jpg'
//import hilo_3 from '../../assets/hilo_3.jpg'
import calidad from '../../assets/calidad.png'

const Servicios = () => {
    return (
        <div className='servicios'>
            <div className="servicio">
                <img src="https://picsum.photos/id/10/400/450" alt="hilo_1"/>
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Refacciones</p>
                </div>
            </div>
            <div className="servicio">
                <img src="https://picsum.photos/id/11/400/450" alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Hilos</p>
                </div>
            </div>
            <div className="servicio">
                <img src="https://picsum.photos/id/15/400/450" alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Cierres</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios