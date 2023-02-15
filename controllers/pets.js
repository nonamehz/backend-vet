const { request, response } = require('express');
const { Pet } = require('../models');


const allPets = async (_req = request, res = response) => {

    const query = { state: true, adopted: false };

    try {
        const pets = await Pet.find(query).populate('veterinary', 'firstName');
        res.json({
            pets
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const petById = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const pet = await Pet.findById(id);

        if (!pet) {
            const error = new Error('Mascota no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        res.json({
            pet
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const addPet = async (req = request, res = response) => {

    const { state, adopted, veterinary, ...rest } = req.body;

    const data = {
        ...rest,
        veterinary: req.uid
    }

    try {

        const pet = new Pet(data);
        await pet.save();

        res.status(201).json({
            pet
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const editPet = async (req = request, res = response) => {

    const { id } = req.params;
    const { state, veterinary, ...rest } = req.body;

    //vet que modifico mascota
    rest.veterinary = req.uid;

    try {

        const pet = await Pet.findByIdAndUpdate(id, rest, { new: true });

        if (!pet) {
            const error = new Error('Mascota no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        res.json({ pet });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const deletePet = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const pet = await Pet.findByIdAndUpdate(id, { state: false }, { new: true });

        if (!pet) {
            const error = new Error('Mascota no existe');
            return res.status(404).json({
                msg: error.message
            });
        }

        res.json({ pet });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}




module.exports = {
    addPet,
    allPets,
    deletePet,
    editPet,
    petById,
}