import './Items.css'
import next_icon from '../../assets/right-arrow.png'
import back_icon from '../../assets/left-arrow.png'
import foto1 from '../../assets/foto1.jpeg'
import foto2 from '../../assets/foto2.jpeg'
import foto3 from '../../assets/foto3.jpeg'
import foto4 from '../../assets/foto4.jpeg'
import { useRef } from 'react'

const Items = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
    }

    return (
        <div className='items'>
            <img src={next_icon} alt="flecha_izquierda" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="flecha_derecha" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="item-info">
                                <img src={foto1} alt="item-1" />
                                <div>
                                    <h3>Item °1</h3>
                                    <span>Item subtitle</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus itaque,
                                nesciunt totam eum cumque necessitatibus recusandae quo, sunt in commodi beatae quibusdam corrupti temporibus rem est amet possimus. Vero?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="item-info">
                                <img src={foto2} alt="item-1" />
                                <div>
                                    <h3>Item °2</h3>
                                    <span>Item subtitle</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus itaque,
                                nesciunt totam eum cumque necessitatibus recusandae quo, sunt in commodi beatae quibusdam corrupti temporibus rem est amet possimus. Vero?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="item-info">
                                <img src={foto3} alt="item-1" />
                                <div>
                                    <h3>Item °3</h3>
                                    <span>Item subtitle</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus itaque,
                                nesciunt totam eum cumque necessitatibus recusandae quo, sunt in commodi beatae quibusdam corrupti temporibus rem est amet possimus. Vero?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="item-info">
                                <img src={foto4} alt="item-1" />
                                <div>
                                    <h3>Item °4</h3>
                                    <span>Item subtitle</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus itaque,
                                nesciunt totam eum cumque necessitatibus recusandae quo, sunt in commodi beatae quibusdam corrupti temporibus rem est amet possimus. Vero?
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Items
