const EditorialesModel = require('../models/editoriales');

class EditorialesController {
    static async indexGet(req, res){
        let data = await EditorialesModel.consultar();
        res.send(data);
    }
}

module.exports = EditorialesController;