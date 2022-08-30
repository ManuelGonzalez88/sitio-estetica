var express = require('express');
var router = express.Router();
var promosModel = require('../../models/promosModel');

//lee las promos
router.get('/', async function (req, res, next) {
  var promos= await promosModel.getPromos();
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

router.post('/agregar', async (req,res,next)=>{
  try {
    if (req.body.promo != '' && req.body.precio != ''){
      await promosModel.insertPromos(req.body);
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
    let obj = {
      promo: req.body.promo,
      precio:req.body.precio
    }
  
  await promosModel.modificarPromo(obj, req.body.id);
  res.redirect('admin/promos');
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