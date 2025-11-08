const express = require('express');
const mirrow = require('./endpoints/mirrow');

//vamos a hacer una instancia del servidor

const app = express();
const port = 3000;

app.use(express.json()); //middleware para parsear json
//definimos cada una de las rutas

// Use the mirrow handler for all routes and methods
app.use(mirrow);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
