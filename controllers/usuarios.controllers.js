const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/Usuario');


const usuariosGet = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }

    const { count: total, rows: usuarios } = await Usuario.findAndCountAll({ where: query, limit: limite, offset: desde });

    res.status(200).json({
        total,
        usuarios
    });

}

const usuariosGetById = async (req = request, res = response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    res.status(200).json(usuario);

}

const usuariosPost = async (req = request, res = response) => {

    const { nombre, apellido, correo, password, celular } = req.body;
    const usuario = new Usuario({ nombre, apellido, correo, password, celular });

    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en BD
    await usuario.save();


    res.status(201).json(usuario);

}

const usuariosPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: pk, password, estado, correo, rol, ...resto } = req.body;

    //validar password base de datos
    if (password) {
        //encriptar password
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByPk(id);
    await usuario.update(resto);

    res.status(200).json(usuario);

}

const usuariosDelete = async (req = request, res = response) => {

    const { id } = req.params;

    //cambiar estado
    const usuario = await Usuario.findByPk(id);
    await usuario.update({ estado: false });

    res.status(200).json(usuario);

}


module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}