import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/messaje.png'
import mail_icon from '../../assets/gmail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/maps.png'
import white_arrow from '../../assets/derecha.png'


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
                <h3>Envienos un mensaje <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta? Architecto eius blanditiis, consequuntur, error facere exercitationem suscipit perspiciatis accusamus qui vero voluptate in alias ut, voluptatum voluptatem iure autem?</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Hiloslobo@mail.com</li>
                    <li><img src={phone_icon} alt="" />2222411233</li>
                    <li><img src={location_icon} alt="" />Dirección</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nombre</label>
                    <input type="text" name='name' placeholder='Ingresa tu nombre' required />
                    <label>Numero de Telefono</label>
                    <input type="tel" name='phone' placeholder='Ingresa tu numero de telefono' required />
                    <label>Coloca tu mensaje aqui</label>
                    <textarea name="message" id="" rows="6" placeholder='Ingresa tu mensaje' required></textarea>
                    <button type='submit' className='btn dark-btn'>Enviar <img src={white_arrow} alt="" /></button>
                    <span>{result}</span>
                </form>
            </div>
        </div>
    )
}


export default Contact
