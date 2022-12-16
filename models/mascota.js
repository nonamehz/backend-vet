const { DataTypes } = require('sequelize');
const db = require('../database/connection');


const Mascota = db.define('Mascota', {

    nombre: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.NUMBER
    },
    color: {
        type: DataTypes.STRING
    },
    fNacimiento: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.STRING,
    },
    raza: {
        type: DataTypes.STRING,
    },
    peso: {
        type: DataTypes.NUMBER,
    },
    propietario: {
        type: DataTypes.STRING,
    },
    urlFoto: {
        type: DataTypes.STRING,
    },
    adoptado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

});


module.exports = Mascota;