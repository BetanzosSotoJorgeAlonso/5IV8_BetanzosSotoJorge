var http = require('http');

//vamos a crear nuestro propio servidor

var servidor = http.createServer(function (req, res) {
    //req -> request es una solicitud, viene por parte de la arquitectura cliente-servidor, todos los clientes (navegadores, usuarios, apps, servicios, etc) son los que realizan una petición por parte del protocolo
    //res -> response es la respuesta que el servidor le da al cliente
    res.writeHead(200, {'Content-Type': 'text/html charset=UTF-8'}); //200 es un código de estado HTTP que significa que todo está bien
    res.write('<h1>Hola Mundo desde Node.js</h1>');
    res.write('<h1>A mimir x2</h1>');
    console.log('Hola si entró al servidor');
    res.end(); //termina la respuesta
});

//es necesario tener un puerto de comunicacion para el servidor
servidor.listen(3000)

console.log('Servidor ejecutándose en http://localhost:3000/');