/**
 * paquete Express
 */
 const { Router } = require('express');

 const { check } = require('express-validator');

 const { validarCampos } = require('../middlewares/validar-campos');
 
 const { existeMateriaPorId } = require('../helpers/db-validators');


 /**
  * instancia router de Express.Router()
  */
 const router = Router();
 
 /**
  * Funciones de userController
  */
 const {
     materiaGet,
     materiaDelete,
     materiaPost,
     materiaPut
 } = require('../controlles/materiaController');
 
 //-------------Metodos REST---------------------//    
 router.get('/', materiaGet);
 
 router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeMateriaPorId),
    validarCampos], materiaDelete);
 
 router.put('/:id',[
check('id', "No es un ID valido").isMongoId(),
 check('id').custom(existeMateriaPorId)]
 , validarCampos, materiaPut);
 
 router.post('/', materiaPost);
 //----------------------------------------------// 
 
 module.exports = router;