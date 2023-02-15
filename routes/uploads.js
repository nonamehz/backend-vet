const { Router } = require('express');
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads');
const { validarArchivoSubir } = require('../middlewares');


const router = Router();

router.post('/', validarArchivoSubir, cargarArchivo);
router.put('/:id', validarArchivoSubir, actualizarImagen);


module.exports = router;