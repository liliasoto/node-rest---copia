/*
--EQUIPO
- Lilia Soto Llamas 20460040
- Max Yahir Rodríguez González 20460278
- Ramses Patiño Cortés 20460181
*/

const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1', //Nombre del docker-compose service
        port: '3306',
        user: 'root',
        password: '',
        database: 'biblioteca'
    }
});

module.exports = db;