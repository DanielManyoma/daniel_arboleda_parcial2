const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();
const hbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());

app.get('/', function(request,response){

    var contexto = {
        titulo: 'Pagina A',
        descripcion: 'Esta es la descripcion de la pagina A, donde encontraras caracteristicas, y demás cosas.',
    };

    res.render('paginaA', contexto);
});

app.get('/paginaB',function(request,response){

    var contexto = {
        titulo: 'Pagina B',
        descripcion: 'Esta es la descripcion de la pagina B, donde encontraras caracteristicas, y demás cosas.',
    };

    res.render('paginaB', contexto);
});

app.get('/paginaC',function(request,response){

    var contexto = {
        titulo: 'Pagina C',
        descripcion: 'Esta es la descripcion de la pagina C, donde encontraras caracteristicas, y demás cosas.',
    };

    res.render('paginaC', contexto);
});

app.post('/api/datos', function(request, response){
    fs.appendFile('visitas.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('guardado');
      });
    fs.writeFileSync('datos/',data);
    
});

app.listen(5500);