var express = require('express');
var router = express.Router();
var promosModel = require('../models/promosModel');
const cloudinary = require('cloudinary').v2;

router.get('/promos', async function (req, res, next) {
    let promos = await promosModel.getPromos();

    promos = promos.map(promos => {
        if (promos.img_id) {
            const imagen = cloudinary.url(promos.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
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

module.exports = router;