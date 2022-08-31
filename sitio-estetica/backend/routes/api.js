var express = require('express');
var router = express.Router();
var promosModel = require('../models/promosModel');
const cloudinary = require('cloudinary').v2;
var nodemailer=require('nodemailer');

router.get('/promos', async function (req, res, next) {
    let promos = await promosModel.getPromos();

    promos = promos.map(promos => {
        if (promos.img_id) {
            const imagen = cloudinary.url(promos.img_id, {
                width: 200,
                height: 200,
                crop: 'pad'
            });
            return {
                ...promos,
                imagen
            }
        } else {
            return{
                ...promos,
                imagen: ''
            }
        }
    })

    res.json(promos);

});

router.post('/contacto', async (req, res)=> {
    const mail = {
        to: 'ggestetica21@gmail.com',
        subject: 'contacto web',
         html: `${req.body.nombre} se contacto a traves de la web y quiere mas información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;