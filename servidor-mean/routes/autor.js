const express = require('express');
const router = express.Router();

const autorController = require('../controllers/autor.controller');

// CREAR AUTOR
router.post('/', autorController.crearAutor);

// OBTENER AUTORES
router.get('/', autorController.obtenerAutores);

// ACTUALIZAR AUTOR
router.put('/:id', autorController.actualizarAutor);

// OBTENER AUTOR POR ID
router.get('/:id', autorController.obtenerAutorPorID);

// ELIMINAR AUTOR
router.delete('/:id', autorController.eliminarAutor);

module.exports = router;
