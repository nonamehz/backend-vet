const { request, response } = require('express');
const path = require('path');
const fs = require('fs');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { subirArchivo } = require('../helpers');
const { Pet } = require('../models');


const cargarArchivo = async (req = request, res = response) => {

    try {

        const nombre = await subirArchivo(req.files, undefined, 'imgs');
        res.json({
            nombre
        });

    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }

}

const actualizarImagen = async (req = request, res = response) => {

    const { id } = req.params;

    const modelo = await Pet.findById(id);

    if (!modelo) {
        return res.status(404).json({
            msg: 'Mascota no existe'
        });
    }

    // limpiar imgs previas
    if (modelo.img) {
        // borrar la imagen de cloudinary
        const nombreArr = modelo.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [public_id] = nombre.split('.');
        cloudinary.uploader.destroy(public_id);
    }

    const { tempFilePath } = req.files.archivo;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    modelo.img = secure_url;

    await modelo.save();

    res.json(modelo);

}

const mostrarImagen = async (req = request, res = response) => {

    const { id } = req.params;

    const modelo = await Pet.findById(id);

    if (!modelo) {
        return res.status(404).json({
            msg: 'Mascota no existe'
        });
    }

    // limpiar imgs previas
    if (modelo.img) {
        // borrar la imagen del servidor
        const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
        if (fs.existsSync(pathImagen)) {
            return res.sendFile(pathImagen);
        }
    }

    const pathImagen = path.join(__dirname, '../assets/no-image.png');
    res.sendFile(pathImagen);

}

module.exports = {
    actualizarImagen,
    cargarArchivo,
    mostrarImagen,
}