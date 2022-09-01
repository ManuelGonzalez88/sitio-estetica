import React from "react";
import { useState } from "react";
import axios from 'axios';

const Contacto = (props) => {

    const initialForm={
        nombre:'',
        email:'',
        telefono:'',
        mensaje: ''
    }

    const [sending, setSending]= useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        };
    }

    return (
        <main className="holder">
        <h2>Contacto</h2>
        <div className="contacto">
            <div className="box">
                <form action="/contacto" onSubmit={handleSubmit} method="post" className="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} id="nombre"/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>


            <div className="box">
                <h5>Seguinos en:</h5>
                <div className="redes">
                    <img src="img/icono-instagram.webp" alt="icono-intagram"/>
                    <p>instagram: gg.estetica</p>
                </div>
                <div className="redes">
                    <img src="img/icono-facebook.png" alt="icono-facebook"/>
                    <p>facebook: gg.estetica</p>
                </div>
                <h5>Contactanos por Whatsapp:</h5>

                <div className="redes">
                    <img src="img/icono-whatsapp.png" alt="icono-whatsapp"/>
                    <p>1199655268</p>
                </div>
            </div>
        </div>

    </main>
    );
}

export default Contacto;