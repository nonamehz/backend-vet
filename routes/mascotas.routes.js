const { Router } = require('express');
const { check } = require('express-validator');

const {
    mascotasGet,
    mascotasGetById,
    mascotasPost,
    mascotasPut,
    mascotasDelete
} = require('../controllers/mascotas.controller');


const router = Router();

router.get('/mascotas', mascotasGet);
router.get('/mascotas/:id', mascotasGetById);
router.post('/mascotas', mascotasPost);
router.put('/mascotas/:id', mascotasPut);
router.delete('/mascotas/:id', mascotasDelete);


module.exports = router;