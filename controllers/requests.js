const { request, response } = require('express');
const { Request, Pet, User } = require('../models');
const { enviarEmailAceptado, enviarEmailRechazado } = require('../helpers');

const allRequests = async (_req = request, res = response) => {

    try {
        const requests = await Request.find()
            .populate('pet', 'name')
            .populate('veterinary', 'firstName')
            .populate('user', 'firstName');

        res.json({
            requests
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

const requestById = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const requestdb = await Request.findById(id);

        if (!requestdb) {
            const error = new Error('Solicitud no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        res.json({
            requestdb
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const addRequest = async (req = request, res = response) => {

    const { user, acepted, ...rest } = req.body;

    const data = {
        ...rest,
        user: req.uid,
    }

    try {

        const requestdb = new Request(data);
        await requestdb.save();

        res.status(201).json({
            requestdb
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const acceptRequest = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const requestdb = await Request.findById(id);
        const user = await User.findById(requestdb.user);


        if (!requestdb) {
            const error = new Error('Solicitud no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        await Pet.findByIdAndUpdate(requestdb.pet, { adopted: true });
        requestdb.veterinary = req.uid;
        requestdb.acepted = true;
        requestdb.save();

        //TODO: Mandar correo a usuario de confirmación de adopción
        enviarEmailAceptado({
            user
        });

        res.json({
            requestdb
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const rejectRequest = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const requestdb = await Request.findById(id);
        const user = await User.findById(requestdb.user);
        if (!requestdb) {
            const error = new Error('Solicitud no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        await Request.findByIdAndDelete(id);
        //TODO: Mandar correo a usuario de rechazo de adopción
        enviarEmailRechazado({
            user
        });

        res.json({
            msg: 'Solicitud Rechazada'
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}


module.exports = {
    acceptRequest,
    allRequests,
    requestById,
    addRequest,
    rejectRequest,
}