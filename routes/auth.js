const { Router } = require('express');
const { login, register, renewToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares');


const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/renew', validarJWT, renewToken);


module.exports = router;