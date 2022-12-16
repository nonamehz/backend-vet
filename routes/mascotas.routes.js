const { Router } = require('express');
const { check } = require('express-validator');

const {
    mascotasGet,
    mascotasGetById,
    mascotasPost,
    mascotasPut,
    mascotasDelete
} = require('../controllers/mascotas.controller');
const { esRoleValidoAdmin, existeMascotaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/mascotas', mascotasGet);

router.get('/mascotas/:id', [
    check('id').custom(existeMascotaPorId),
    validarCampos
], mascotasGetById);

router.post('/mascotas', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('edad', 'El edad es obligatorio').not().isEmpty(),
    check('color', 'El color es obligatorio').not().isEmpty(),
    check('fNacimiento', 'El fNacimiento es obligatorio').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('raza', 'El raza es obligatorio').not().isEmpty(),
    check('peso', 'El peso es obligatorio').not().isEmpty(),
    check('propietario', 'El propietario es obligatorio').not().isEmpty(),
    check('urlFoto', 'El urlFoto es obligatorio').not().isEmpty(),
    check('rol').custom(esRoleValidoAdmin),
    validarCampos
], mascotasPost);

router.put('/mascotas/:id', [
    check('id').custom(existeMascotaPorId),
    validarCampos
], mascotasPut);

router.delete('/mascotas/:id', [
    check('id').custom(existeMascotaPorId),
    validarCampos
], mascotasDelete);


module.exports = router;