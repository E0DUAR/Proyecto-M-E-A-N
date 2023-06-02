const Autor = require("../models/autor");

exports.crearAutor = async (req, res) => {
    try {
        let autor;

        // CREAR AUTOR
        autor = new Autor(req.body);

        // ALMACENAR EL AUTOR
        await autor.save();
        res.send(autor);

    } catch (error) {
        console.log('Hubo un error al crear el autor', error);
        res.status(500).send('Hubo un error al crear el autor');
    }
}

exports.obtenerAutores = async (req, res) => {
    try {
        const autores = await Autor.find();
        res.json(autores);

    } catch (error) {
        console.log('Hubo un error al obtener el listado de autores', error);
        res.status(500).send('Hubo un error al obtener el listado de autores');
    }
}

exports.actualizarAutor = async (req, res) => {
    try {
        const { nombre, apellido, edad } = req.body;

        let autor = await Autor.findById(req.params.id); // ENCONTRAR EL ID DEL AUTOR

        if (!autor) {
            res.status(404).json({ msg: "No existe este autor" });
        }

        autor.nombre = nombre;
        autor.apellido = apellido;
        autor.edad = edad;

        autor = await Autor.findOneAndUpdate({ _id: req.params.id }, autor, { new: true });
        res.json(autor);

    } catch (error) {
        console.log('Hubo un error al actualizar el autor', error);
        res.status(500).send('Hubo un error al actualizar el autor');
    }
}

exports.obtenerAutorPorID = async (req, res) => {
    try {
        let autor = await Autor.findById(req.params.id); // ENCONTRAR EL ID DEL AUTOR

        if (!autor) {
            res.status(404).json({ msg: "No existe este autor" });
        }

        res.json(autor);

    } catch (error) {
        console.log('Hubo un error al obtener el autor', error);
        res.status(500).send('Hubo un error al obtener el autor');
    }
}

exports.eliminarAutor = async (req, res) => {
    try {
        let autor = await Autor.findById(req.params.id); // ENCONTRAR EL ID DEL AUTOR

        if (!autor) {
            res.status(404).json({ msg: "No existe este autor" });
        }

        await Autor.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Autor eliminado correctamente' });

    } catch (error) {
        console.log('Hubo un error al eliminar el autor', error);
        res.status(500).send('Hubo un error al eliminar el autor');
    }
}
