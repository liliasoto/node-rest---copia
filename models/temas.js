/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('temas').where('id_tema', id);
    }

    static agregarTema(nombre, res){
        if(!nombre){
            return res.json({success:false, message: 'Un error ha ocurrido, porfavor intente más tarde'});
        }
        db('temas')
        .insert({nombre})
        .catch((err)=>{
            console.log(err);
            return res.json({
                success:false, 
                message: 'Un error ha ocurrido, por favo intente más tarda'
            });
        })
    }
    
}

module.exports = TemasModel;