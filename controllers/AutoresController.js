const AutoresModel = require('../models/autores');

class AutoresController {
    static async indexGet(req, res){
        let data = await AutoresModel.consultar();
        res.send(data);
    }
}

module.exports = AutoresController;