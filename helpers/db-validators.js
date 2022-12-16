const Mascota = require('../models/mascota');
const Usuario = require('../models/usuario');


const emailExiste = async (correo = '') => {

    const existeEmail = await Usuario.findOne({ where: { correo } });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado`);
        // return res.status(400).json({
        //     msg: 'Ese correo ya está registrado'
        // });
    }

}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
}

const existeMascotaPorId = async (id) => {
    const existeMascota = await Mascota.findByPk(id);
    if (!existeMascota) {
        throw new Error(`El id no existe ${id}`);
    }
}


module.exports = {
    emailExiste,
    existeUsuarioPorId,
    existeMascotaPorId
}