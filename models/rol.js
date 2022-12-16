const { DataTypes } = require('sequelize');
const db = require('../database/connection');


const Rol = db.define('Rol', {

    rol: {
        type: DataTypes.STRING
    }

});


module.exports = Rol;