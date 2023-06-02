const mongoose = require('mongoose');
require('dotenv').config( {path: 'variables.env'} );


const conectarseDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //SI ACTIVO ESTO LANZA ERROR: useFindAndModify: false
        })
        console.log('Exito en la conexión a la base de datos');

    } catch (error) {
        console.log('Error en la conexion a MongoDB');
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectarseDB

