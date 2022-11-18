const { DataTypes } = require('sequelize');
const db = require('../database/connection');


const Usuario = db.define('Usuario', {

    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'USER_ROLE'
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    celular: {
        type: DataTypes.STRING
    }

});


module.exports = Usuario;