//RUTAS PARA LIBRERIA

const express = require('express');
const router = express.Router();

const libroController = require('../controllers/libro.controller');

//CREAR LIBRO
router.post('/', libroController.crearLibro);

//OBTENER LIBRO
router.get('/', libroController.obtenerLibro);

//ACTUALIZAR LIBRO
router.put('/:id', libroController.ActualizarLibro);

//OBTENER LIBRO POR ID
router.get('/:id', libroController.ObtenerLibroByID);

//ELIMINAR LIBRO
router.delete('/:id', libroController.EliminarLibro);

module.exports = router;