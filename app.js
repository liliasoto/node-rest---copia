const express = require('express');
const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasControllers');
const AutoresController = require('./controllers/AutoresController');
const EditorialesController = require('./controllers/EditorialesControllers');
const LibrosController = require('./controllers/LibrosControllers');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Holi');
});

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);

app.post('/temas', TemasController.indexPost);

app.get('/autores', AutoresController.indexGet);

app.get('/editoriales', EditorialesController.indexGet);

app.get('/libros', LibrosController.indexGet);

app.post('/libros', LibrosController.indexPost);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
