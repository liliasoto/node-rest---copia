/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const EditorialesModel = require('../models/editoriales');

class EditorialesController {
    static async indexGet(req, res){
        let data = await EditorialesModel.consultar();
        res.send(data);
    }
}

module.exports = EditorialesController;