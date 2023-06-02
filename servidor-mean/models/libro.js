const mongoose = require('mongoose');

//VALIDACIONES CONDICIONALES PARA LOS LIBROS
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    nro_paginas: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});

//DONDE DICE "LIBROS", LIBROS SE REFIERE A A LA TABLA O DOCUMENTOS DE LA BASE DE DATOS DONDE SE ALMACENA
module.exports = mongoose.model('libros', productoSchema);