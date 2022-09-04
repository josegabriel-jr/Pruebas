/**
 * paquete Express
 */
const { Router } = require('express');

const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { existeUsuarioPorId } = require('../helpers/db-validators');


/**
 * instancia router de Express.Router()
 */
const router = Router();

/**
 * Funciones de userController
 */
const {
    userGet,
    userDelete,
    userPost,
    userPut
} = require('../controlles/userController');

//-------------Metodos REST---------------------//    
router.get('/', userGet);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos], userDelete);

router.put('/:id',
    [check('id', "No es un ID valido").isMongoId(),
    check('id').custom(existeUsuarioPorId)]
    , validarCampos, userPut);

router.post('/', [check('email', "El correo no es valido").isEmail(),
], userPost);
//----------------------------------------------// 

module.exports = router;