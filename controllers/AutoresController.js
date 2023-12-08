/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const AutoresModel = require('../models/autores');

class AutoresController {
    static async indexGet(req, res){
        let data = await AutoresModel.consultar();
        res.send(data);
    }
}

module.exports = AutoresController;