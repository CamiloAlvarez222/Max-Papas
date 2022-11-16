const express= require('express');
const router= express.Router();
const maincontroller= require('../controllers/mainController.js');

router.get('/', maincontroller.index);
router.get('/Carrito',maincontroller.carrito);

module.exports=router;
