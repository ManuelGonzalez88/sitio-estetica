import React from "react";

const Contacto = (props) => {
    return (
        <main className="holder">
        <h2>Contacto</h2>
        <div className="contacto">
            <div className="box">
                <form action="" class="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre"/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" id="telefono"/>
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" id="email"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
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