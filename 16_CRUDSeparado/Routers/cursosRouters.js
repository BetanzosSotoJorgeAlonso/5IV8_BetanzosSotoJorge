//este es el middleware

const { Router } = require('express');

//definir la ruta del consumo del endpoint

const cursosController = require('../Controllers/cursosControl.js');

const cursosRouter = Router();


//definir cada endpoint

cursosRouter.get('/', cursosController.getCursos);

cursosRouter.get('/:id', cursosController.getCursosByid);

cursosRouter.post('/registrar.curso', cursosController.createCursos);

cursosRouter.put('/:id', cursosController.updateCursos);

cursosRouter.delete('/:id', cursosController.deleteCursos);