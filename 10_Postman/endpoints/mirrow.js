const mirrow = (req, res) => {
    const methods = [{
        method: 'POST',//modifica
        hasBody: true,
        purpouse: "El método POST se utiliza para enviar una entidad a un recurso especifico, causando a menudo un cambio en el estado o efectos secundarios en el servidor."
    },{
        method: 'PUT',//update, cambio general
        hasBody: true,
        purpouse: "El método PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la solicitud."
    },{
        method: 'PATCH',//update a una parte, cambio parcial
        hasBody: true,
        purpouse: "El método PATCH es utilizado para aplicar modificaciones parciales a un recurso."
    },{
        method: 'HEAD',
        hasBody: false,
        purpouse: "El método HEAD pide una respuesta identica a la de una petición GET, pero sin el cuerpo de la respuesta."
    },{
        method: 'GET',
        hasBody: false,
        purpouse: "El método GET solicita una representación de un recurso específico, las peticiones que usan el método GET solo deben recuperar datos."
    },{
        method: 'DELETE',
        hasBody: false,
        purpouse: "El método DELETE elimina un recurso especifico."
    }];

    // Determinar el método de la petición usando req.method
    const requestMethod = methods.find(m => m.method === req.method.toUpperCase()) || {
        method: req.method,
        hasBody: false,
        purpouse: "Método no reconocido, no tiene body o no hay una respuesta"
    };

    requestMethod.purpouse += requestMethod.hasBody ? "Tiene cuerpo" : "No tiene cuerpo";
    
    if(requestMethod.hasBody) { //body es el cuerpo de la petición
        // devolver el body recibido junto con información de la ruta
        res.json({ ...req.body, ruta_consumida: req.originalUrl, ...requestMethod });
    } else {
        res.json({ ruta_consumida: req.originalUrl, ...requestMethod });
    }
    };

    // Exportar la función para que pueda ser usada por el servidor
    module.exports = mirrow;