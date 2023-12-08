/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const LibrosModel = require('../models/libros');

class LibrosController {
    static async indexGet(req, res){
        let data = await LibrosModel.consultar();
        res.send(data);
    }

    static async indexPost(req, res){
        console.log(req.body);

        let titulo = req.body.titulo;
        let edicion = req.body.edicion;
        let fk_id_autor = req.body.fk_id_autor;
        let fk_id_editorial = req.body.fk_id_editorial;
        let fk_id_tema = req.body.fk_id_tema;

        await LibrosModel.agregarLibro(titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema, res);

        return res.end('yes');
    }
}

module.exports = LibrosController;