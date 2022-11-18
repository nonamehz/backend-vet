const express = require('express');
const cors = require('cors');


const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api', require('./routes/usuarios.routes'));
app.use('/api', require('./routes/auth.routes'));


module.exports = app;