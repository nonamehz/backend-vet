const { Router } = require('express');
const { usuariosGet, usuariosGetById, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios.controllers');


const router = Router();

router.get('/usuarios', usuariosGet);
router.get('/usuarios/:id', usuariosGetById);
router.post('/usuarios', usuariosPost);
router.put('/usuarios/:id', usuariosPut);
router.delete('/usuarios/:id', usuariosDelete);


module.exports = router;