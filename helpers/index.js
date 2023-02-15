

const enviarEmail = require('./enviar-email');
const generarJWT = require('./generar-jwt');
const subirArchivo = require('./subir-archivo');


module.exports = {
    ...enviarEmail,
    ...generarJWT,
    ...subirArchivo,
}