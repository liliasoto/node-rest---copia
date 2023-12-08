/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const db = require('../dbconnection');

class EditorialesModel {
    static async consultar() {
        let query = db('editoriales');
        return await query;
    }
    
}

module.exports = EditorialesModel;