const db = require('../dbconnection');

class AutoresModel {
    static async consultar() {
        let query = db('autores');
        return await query;
    }
    
}

module.exports = AutoresModel;