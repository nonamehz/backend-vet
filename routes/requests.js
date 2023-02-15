const { Router } = require('express');

const { validarJWT } = require('../middlewares');
const { allRequests, requestById, addRequest, acceptRequest, rejectRequest } = require('../controllers');


const router = Router();

router.get('/', allRequests);
router.get('/:id', requestById);
router.post('/', validarJWT, addRequest);

//TODO: Solo usuario administrador -> generar middleware
router.post('/accept/:id', validarJWT, acceptRequest);
router.delete('/:id', validarJWT, rejectRequest);


module.exports = router;