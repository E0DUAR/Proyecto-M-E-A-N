const mongoose = require('mongoose');

//VALIDACIONES CONDICIONES PARA LOS AUTORES
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('autors', productoSchema);