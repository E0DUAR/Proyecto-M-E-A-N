const express = require('express');
const conectarseDB = require('./config/db');
const cors = require('cors');
//SERVIDOR
const APP = express();

//CONEXIÓN BASE DE DATOS MONGO
conectarseDB();

APP.use(cors());

//HABILITAR PARA QUE SE PUEDAN ENVIAR JSON A LA APLICACIÓN
APP.use(express.json());

//RUTAS
APP.use('/api/libros', require('./routes/libros'));
APP.use('/api/autores', require('./routes/autor'));

//PUERTO
APP.listen(4000, () => { console.log('El servidor está corriendo perfectamente') });
