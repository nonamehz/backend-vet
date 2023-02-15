const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const { User } = require('../models');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {
        //usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error('El usuario no existe.');
            return res.status(404).json({
                msg: error.message
            });
        }

        //usuario activo
        if (!user.state) {
            const error = new Error('Tu cuenta no está activada.');
            return res.status(400).json({
                msg: error.message
            });
        }

        //verificar password
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            const error = new Error('Contraseña incorrecta');
            return res.status(400).json({
                msg: error.message
            });
        }

        const token = await generarJWT(user.id, user.firstName, user.role);

        res.json({
            uid: user.id,
            name: user.firstName,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }


}

const register = async (req = request, res = response) => {

    const { email, password } = req.body;

    //validar email
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('Email ya registrado');
        return res.status(400).json({
            msg: error.message
        });
    }

    try {
        const user = new User(req.body);
        //encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        const token = await generarJWT(user.id, user.firstName, user.role);

        res.status(201).json({
            uid: user.id,
            name: user.firstName,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }

}

const renewToken = async (req = request, res = response) => {

    const { uid, name, role } = req;

    const token = await generarJWT(uid, name, role);

    res.json({
        uid,
        name,
        role,
        token
    });
}


module.exports = {
    login,
    register,
    renewToken
}