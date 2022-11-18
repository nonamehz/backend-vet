const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet, usuariosGetById, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios.controllers');
const { existeUsuarioPorId, emailExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/usuarios', usuariosGet);

router.get('/usuarios/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosGetById);

router.post('/usuarios', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe de tener un mínimo de 6 caracteres').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    validarCampos
], usuariosPost);

router.put('/usuarios/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosPut);


router.delete('/usuarios/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);


module.exports = router;