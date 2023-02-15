

const validarArchivoSubir = require('./validar-archivo');
const validarJWT = require('./validar-jwt');


module.exports = {
    ...validarArchivoSubir,
    ...validarJWT,
}