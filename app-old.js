const http = require('http');

http.createServer((req, res) => {
        //res.write('Hola mundo');
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        let salida = {
            nombre: 'Juan Gabriel',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');