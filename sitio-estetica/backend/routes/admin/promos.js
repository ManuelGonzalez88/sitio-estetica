var express = require('express');
var router = express.Router();
var promosModel = require('../../models/promosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

//lee las promos
router.get('/', async function (req, res, next) {
  var promos= await promosModel.getPromos();

  promos= promos.map(promo => {
    if(promo.img_id) {
      const imagen = cloudinary.image(promo.img_id, {
        width: 100,
        height: 100,
        crop:'pad'
      });
      return {
        ...promo,
        imagen
      }
    } else {
      return {
        ...promo,
        imagen:''
      }
    }
  });

  res.render('admin/promos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    promos
  });
});

//agrega promos
router.get('/agregar',(req, res, next)=>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req,res,next) => {
  try {

    var img_id = '';
    if (req.files && Object.keys(req.files).length>0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.promo != '' && req.body.precio != ''){
      await promosModel.insertPromos({
        ...req.body,
        img_id
      });
      
      res.redirect('/admin/promos')
    } else {
      res.render('admin/agregar', {
        layout:'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

//eliminar promo
router.get('/eliminar/:id', async (req, res, net) => {
  var id = req.params.id;

  let promo = await promosModel.getPromosById(id);
  if (promo.img_id) {
    await (destroy(promo.img_id));
  }

  await promosModel.deletePromoById(id);
  res.redirect('/admin/promos')
});


//modificar promo
router.get('/modificar/:id', async (req, res, next) => {
  let id=req.params.id;
  let promo=await promosModel.getPromosById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    promo
  })
})

router.post('/modificar', async (req, res, next) => {
  try{
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === '1') {
      img_id = null;
      borrar_img_vieja=true;
    } else {
      if (req.files && Object.keys(req.files).length>0) {
        imagen=req.files.imagen;
        img_id= (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    let obj = {
      promo: req.body.promo,
      precio:req.body.precio,
      img_id
    }
  
  await promosModel.modificarPromo(obj, req.body.id);
  res.redirect('/admin/promos');
} catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error:true,
      message: 'No se modificó la promo'
    })
}
})

module.exports = router;