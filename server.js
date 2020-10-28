const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Obtener el puerto, localmente PORT no existe por lo tanto usa el 3000 localmente, sino el del servidor
const port = process.env.PORT || 3000;

//Para poner todo el directorio public como público para poder acceder desde la URL al html
app.use(express.static(__dirname + '/public'));

//Express HBS Engine (Handlebars.js)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



//Esta petición GET renderiza el home
app.get('/', function (req, res) {
    //res.send('Hola mundo')
    // let salida = {
    //     nombre: 'Juan Gabriel',
    //     edad: 32,
    //     url: req.url
    // }

    //res.send(salida);

    //Muestra el home.hbs y se le envía un objeto como parámetro
    res.render('home', {
        nombre: 'AMOR DE MI VIDA!'
    })
});

app.get('/data', function (req, res) {
    res.send('Hola data');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});