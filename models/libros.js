const db = require('../dbconnection');

class LibrosModel {
    /*static async consultar() {
        let query = db('libros');
        return await query;
    }
    */


    /*
    static agregarLibro(titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema, res){
        if(!titulo){
            return res.json({success:false, message: 'Un error ha ocurrido, porfavor intente más tarde'});
        }
        db('libros')
        .insert({titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema})
        .catch((err)=>{
            console.log(err);
            return res.json({
                success:false, 
                message: 'Un error ha ocurrido, por favo intente más tarda'
            });
        })
    }
    */

    static async agregarLibro(titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema, res) {
        console.log('Inicio agregarLibro');
        if (!titulo) {
            return res.json({ success: false, message: 'Un error ha ocurrido, por favor intente más tarde' });
        }
        console.log('Después del return');

        const [nombre, apellidos] = fk_id_autor.split(' ');

        // Obtener los IDs correspondientes a los nombres
        const [autorId] = await db('autores').select('id_autor').where({ nombre: nombre, apellidos });
        const [editorialId] = await db('editoriales').select('id_editorial').where({ nombre: fk_id_editorial });
        const [temaId] = await db('temas').select('id_tema').where({ nombre: fk_id_tema });

        console.log('Después de obtener IDS');
        console.log('Antes de la inserción en la base de datos');
        // Insertar el libro con los IDs obtenidos
        db('libros')
            .insert({
                titulo,
                edicion,
                fk_id_autor: autorId.id_autor,
                fk_id_editorial: editorialId.id_editorial,
                fk_id_tema: temaId.id_tema
            })
            .catch((err) => {
                console.log(err);
                return res.json({
                    success: false,
                    message: 'Un error ha ocurrido, por favor intente más tarde'
                });
            });
        console.log('Se hizo lo del insert');
    }

    static async consultar() {
        let query = await db('libros as l')
        .join('autores as a','a.id_autor','l.fk_id_autor')
        .join('editoriales as e','e.id_editorial','l.fk_id_editorial')
        .join('temas as t','t.id_tema','l.fk_id_tema')
        .select('l.id_libro','l.titulo', 'l.edicion','a.nombre as nombre_autor','a.apellidos as apellido_autor', 'e.nombre as nombre_editorial', 't.nombre as nombre_tema')
        .orderBy('l.id_libro', 'asc');;

        return  query;
    }
    
}

module.exports = LibrosModel;