const Libro = require("../models/libro");

exports.crearLibro = async (req, res) => { 
    try {
        let libro;

        //CREAR LIBRO
        libro = new Libro(req.body);

        //ALMACENAR EL libro
        await libro.save();
        res.send(libro);

    } catch (error) {
        console.log('Hubo un error al crear el libro', error);
        res.status(500).send('Hubo un error al crear el libro');
    }
 }


 exports.obtenerLibro = async (req, res) => {
    try {

        const libros = await Libro.find();
        res.json(libros);
        
    } catch (error) {
        console.log('Hubo un error al obtener el listado de libros', error);
        res.status(500).send('Hubo un error al obtener listado de libros');
    }
 }


 exports.ActualizarLibro = async (req, res) => {
    try {  

        const { nombre, descripcion, nro_paginas, autor } = req.body;

        let libro = await Libro.findById(req.params.id); //ENCONTRAR EL ID DEL LIBRO

        if (!libro) {
            res.status(404).json({msg: "No existe este libro"});
        }

        libro.nombre = nombre;
        libro.descripcion = descripcion;
        libro.nro_paginas = nro_paginas;
        libro.autor = autor; 

        libro  = await Libro.findOneAndUpdate( { _id: req.params.id }, libro, { new: true } );
        res.json(libro);

    } catch (error) {
        console.log('Hubo un error al actualizar el libro', error);
        res.status(500).send('Hubo un error al actualizar el libro');
    }
 }


 exports.ObtenerLibroByID = async (req, res) => {
    try {

        let libro = await Libro.findById(req.params.id); //ENCONTRAR EL ID DEL LIBRO

        if (!libro) {
            res.status(404).json({msg: "No existe este libro"});
        }

        res.json(libro);
        
    } catch (error) {
        console.log('Hubo un error al obtener el libro', error);
        res.status(500).send('Hubo un error al obtener el libro');
    }
 }


 exports.EliminarLibro = async (req, res) => {
    try {

        let libro = await Libro.findById(req.params.id); //ENCONTRAR EL ID DEL LIBRO

        if (!libro) {
            res.status(404).json({msg: "No existe este libro"});
        }

        await Libro.findOneAndRemove( { _id: req.params.id } )
        res.json({ msg: 'Libro eliminado correctamente' });
        
    } catch (error) {
        console.log('Hubo un error al obtener el libro', error);
        res.status(500).send('Hubo un error al obtener el libro');
    }
 }