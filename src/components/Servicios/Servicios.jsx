import './Servicios.css'
import refaccion from '../../assets/productos/pies.png'
import hilo from '../../assets/productos/carrete.png'
import cierre from '../../assets/productos/cierres.png'
import calidad from '../../assets/iconos/calidad.png'

const Servicios = () => {
    return (
        <div className='servicios'>
            <div className="servicio">
                <img src={refaccion} alt="hilo_1" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Refacciones</p>
                </div>
            </div>
            <div className="servicio">
                <img src={hilo} alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Hilos</p>
                </div>
            </div>
            <div className="servicio">
                <img src={cierre} alt="" />
                <div className="caption">
                    <img src={calidad} alt="" />
                    <p>Cierres</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios