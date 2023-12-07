const db = require('../dbconnection');

class EditorialesModel {
    static async consultar() {
        let query = db('editoriales');
        return await query;
    }
    
}

module.exports = EditorialesModel;