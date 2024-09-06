import './Servicios.css'
import hilo_3 from '../../assets/hilo_3.jpg'
import calidad from '../../assets/calidad.png'

const Servicios = () => {
    return (
        <div className='servicios'>
            <div className="servicio">
                <img src={hilo_3} alt="hilo_1" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Refacciones</p>
                </div>
            </div>
            <div className="servicio">
                <img src={hilo_3} alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Hilos</p>
                </div>
            </div>
            <div className="servicio">
                <img src={hilo_3} alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Cierres</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios