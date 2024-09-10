import React from 'react'
import './Contact.css'
import white_arrow from '../../assets/iconos/derecha.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c0b33c89-e788-4821-8756-05dd49968bdb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Mensaje enviado de manera correcta");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Envienos un mensaje <i class="fa-solid fa-comment"></i></h3>
                <p>Nos complace atenderte. Contamos con sucursales en Puebla y Tlaxcala para tu conveniencia. Por favor, localiza la sucursal más cercana a ti. Si tienes dudas, preguntas o sugerencias, no dudes en enviarnos un mensaje.</p>
                <br />
                <p>Por favor, asegúrate de proporcionar información precisa para que podamos ofrecerte una respuesta rápida y eficaz.</p>
                <br/>
                <ul>
                    <img src="" alt="" class="fa-solid fa-calendar-days" /><li>Lunes a Viernes de: 9:00 a 18:00. Sábados de: 9:00 a 13:00HRS</li>
                    <img src="" alt="" class="fa-solid fa-envelope" /><li>info@hiloslobo.com</li>
                    <img src="" alt="" class="fa-solid fa-phone" /><li>(222)-2-24-10-82</li>
                    <img src="" alt="" class="fa-solid fa-location-dot" /><li>Local 4, Calle 7 Norte #701, Centro Historico Publa Pue. C.p72000.</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nombre</label>
                    <input type="text" name='name' placeholder='Ingrese su nombre' required />
                    <label>Asunto</label>
                    <input type="text" name='subject' placeholder='Ingrese el asunto por el cual se comunica' required />
                    <label>Numero de Telefono</label>
                    <input type="tel" name='phone' placeholder='Ingrese su numero de telefono' required />
                    <label>Coloca tu mensaje aqui</label>
                    <textarea name="message" id="" rows="6" placeholder='Ingrese su mensaje' required></textarea>
                    <button type='submit' className='btn dark-btn'>Enviar <img src={white_arrow} alt="" /></button>
                    <span>{result}</span>
                </form>
            </div>
        </div >
    )
}


export default Contact
