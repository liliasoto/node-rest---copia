const TemasModel = require('../models/temas');

class TemasController {
    static async indexGet(req, res){
        let data = await TemasModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id; 
        let data = await TemasModel.consultarPorID(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    static async indexPost(req, res){
        console.log(req.body);
        let nombre = req.body.nombre;
        let data = await TemasModel.agregarTema(nombre, res);
        return res.end('yes');
    }
}

module.exports = TemasController;