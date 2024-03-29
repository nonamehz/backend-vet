const { request, response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req = request, res = response, next) => {

    //x-token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid, name, role } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;
        req.role = role;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        });
    }

    next();

}


module.exports = {
    validarJWT
}