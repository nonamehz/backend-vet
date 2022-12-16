const { request, response } = require('express');
const Mascota = require('../models/mascota');


const mascotasGet = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }

    const { count: total, rows: mascotas } = await Mascota.findAndCountAll({ where: query, limit: limite, offset: desde });

    res.status(200).json({
        total,
        mascotas
    });

}

const mascotasGetById = async (req = request, res = response) => {

    const { id } = req.params;

    const mascota = await Mascota.findByPk(id);

    res.status(200).json(mascota);

}

const mascotasPost = async (req = request, res = response) => {

    const { nombre, edad, color, fNacimiento, genero, raza, peso, propietario, urlFoto } = req.body;
    const mascota = new Mascota({ nombre, edad, color, fNacimiento, genero, raza, peso, propietario, urlFoto });

    //Guardar en BD
    await mascota.save();

    res.status(201).json(mascota);

}

const mascotasPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: pk, ...resto } = req.body;

    const mascota = await Mascota.findByPk(id);
    await mascota.update(resto);

    res.status(200).json(mascota);

}

const mascotasDelete = async (req = request, res = response) => {

    const { id } = req.params;

    //cambiar estado
    const mascota = await Mascota.findByPk(id);
    await mascota.update({ estado: false });

    res.status(200).json(mascota);

}


module.exports = {
    mascotasGet,
    mascotasGetById,
    mascotasPost,
    mascotasPut,
    mascotasDelete
}