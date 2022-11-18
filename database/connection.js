const { Sequelize } = require('sequelize');


const db = new Sequelize('vetdb', 'root', 'z123456789', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = db;