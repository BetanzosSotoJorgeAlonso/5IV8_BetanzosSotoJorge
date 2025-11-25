/*
Sistema de Reportes de Mantenimiento - CRUD
Cliente Servidor para gestión de reportes de averías
*/

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

require('dotenv').config({path: './.env'});

const app = express();
const port = 3000;

//configuracion de mysql
const bd = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
});

bd.connect((error) => {
    if (error) {
        console.log('Error de conexion a la base de datos: ' + error);
    } else {
        console.log('Conexion exitosa a la base de datos');
    }
});

//configurar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//carpeta public para recursos estáticos
app.use(express.static(__dirname + '/css'));

//CRUD de reportes de mantenimiento

//ruta get para mostrar el formulario y la lista de reportes
app.get('/', (req, res)=>{
    const querry = 'SELECT * FROM reportes ORDER BY fecha_hora DESC';
    bd.query(querry, (error, resultados)=>{
        if(error){
            console.log('Error al obtener los reportes: ' + error);
            res.status(500).send('Error al obtener los reportes');
        }
        res.render('index', { reportes: resultados });
    });
});

//ruta para crear un reporte
app.post('/reportes', (req, res) => {
    const { fecha_hora, equipo_afectado, sintoma_reportado, diagnostico_tecnico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad } = req.body;
    
    // VALIDACIONES EN EL SERVIDOR
    if (!fecha_hora || !equipo_afectado || !sintoma_reportado) {
        return res.status(400).send('Los campos obligatorios no pueden estar vacíos');
    }
    
    // Validar que equipo_afectado solo contenga letras, números y guiones
    const patronEquipo = /^[A-Za-z0-9\-]+$/;
    if (!patronEquipo.test(equipo_afectado)) {
        return res.status(400).send('ID de Equipo solo permite letras, números y guiones');
    }
    
    // Validar que los campos de texto solo contengan caracteres permitidos
    const patronTexto = /^[A-Za-zÀ-ÿ0-9\s\.,;:\-]*$/;
    if (!patronTexto.test(sintoma_reportado)) {
        return res.status(400).send('Síntoma contiene caracteres no permitidos');
    }
    
    if (diagnostico_tecnico && !patronTexto.test(diagnostico_tecnico)) {
        return res.status(400).send('Diagnóstico contiene caracteres no permitidos');
    }
    
    if (accion_correctiva && !patronTexto.test(accion_correctiva)) {
        return res.status(400).send('Acción Correctiva contiene caracteres no permitidos');
    }
    
    if (piezas_reemplazadas && !patronTexto.test(piezas_reemplazadas)) {
        return res.status(400).send('Piezas Reemplazadas contiene caracteres no permitidos');
    }
    
    if (tiempo_inactividad && !patronTexto.test(tiempo_inactividad)) {
        return res.status(400).send('Tiempo de Inactividad contiene caracteres no permitidos');
    }
    
    console.log(fecha_hora, equipo_afectado, sintoma_reportado);
    const querry = `INSERT INTO reportes (fecha_hora, equipo_afectado, sintoma_reportado, diagnostico_tecnico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad) 
                    VALUES ('${fecha_hora}', '${equipo_afectado}', '${sintoma_reportado}', '${diagnostico_tecnico}', '${accion_correctiva}', '${piezas_reemplazadas}', '${tiempo_inactividad}');`;
    bd.query(querry, (error, resultados) => {
        if (error) {
            console.log('Error al crear el reporte: ' + error);
            res.status(500).send('Error al crear el reporte');
        }
        res.redirect('/');
    });
});

//ruta para borrar
app.get('/reportes/delete/:id', (req, res) => {
    const reporteId = req.params.id;
    const querry = `DELETE FROM reportes WHERE id = ${reporteId};`;
    bd.query(querry, (error, resultados) => {
        if (error) {
            console.log('Error al eliminar el reporte: ' + error);
            res.status(500).send('Error al eliminar el reporte');
        }
        res.redirect('/');
    });
});

//ruta para buscar y editar
app.get('/reportes/edit/:id', (req, res) => {
    const reporteId = req.params.id;
    const query = 'SELECT * FROM reportes ORDER BY fecha_hora DESC';
    bd.query(query, (error, resultados) => {
        if (error) {
            console.log('Error al obtener los reportes: ' + error);
            return res.status(500).send('Error al obtener los reportes');
        }
        const reporte = resultados.find(r => String(r.id) === String(reporteId));
        if (!reporte) {
            return res.status(404).send('Reporte no encontrado');
        }
        return res.render('edit', { reporte: reporte, reportes: resultados });
    });
});

//ruta para actualizar reporte
app.post('/reportes/update/:id', (req, res) => {
    const { fecha_hora, equipo_afectado, sintoma_reportado, diagnostico_tecnico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad } = req.body;
    
    // VALIDACIONES EN EL SERVIDOR
    if (!fecha_hora || !equipo_afectado || !sintoma_reportado) {
        return res.status(400).send('Los campos obligatorios no pueden estar vacíos');
    }
    
    // Validar que equipo_afectado solo contenga letras, números y guiones
    const patronEquipo = /^[A-Za-z0-9\-]+$/;
    if (!patronEquipo.test(equipo_afectado)) {
        return res.status(400).send('ID de Equipo solo permite letras, números y guiones');
    }
    
    // Validar que los campos de texto solo contengan caracteres permitidos
    const patronTexto = /^[A-Za-zÀ-ÿ0-9\s\.,;:\-]*$/;
    if (!patronTexto.test(sintoma_reportado)) {
        return res.status(400).send('Síntoma contiene caracteres no permitidos');
    }
    
    if (diagnostico_tecnico && !patronTexto.test(diagnostico_tecnico)) {
        return res.status(400).send('Diagnóstico contiene caracteres no permitidos');
    }
    
    if (accion_correctiva && !patronTexto.test(accion_correctiva)) {
        return res.status(400).send('Acción Correctiva contiene caracteres no permitidos');
    }
    
    if (piezas_reemplazadas && !patronTexto.test(piezas_reemplazadas)) {
        return res.status(400).send('Piezas Reemplazadas contiene caracteres no permitidos');
    }
    
    if (tiempo_inactividad && !patronTexto.test(tiempo_inactividad)) {
        return res.status(400).send('Tiempo de Inactividad contiene caracteres no permitidos');
    }
    
    console.log(fecha_hora, equipo_afectado, sintoma_reportado);
    const querry = `UPDATE reportes SET 
                    fecha_hora='${fecha_hora}', 
                    equipo_afectado='${equipo_afectado}', 
                    sintoma_reportado='${sintoma_reportado}', 
                    diagnostico_tecnico='${diagnostico_tecnico}', 
                    accion_correctiva='${accion_correctiva}', 
                    piezas_reemplazadas='${piezas_reemplazadas}', 
                    tiempo_inactividad='${tiempo_inactividad}' 
                    WHERE id = ${req.params.id};`;
    bd.query(querry, (error, resultados) => {
        if (error) {
            console.log('Error al actualizar el reporte: ' + error);
            res.status(500).send('Error al actualizar el reporte');
        }
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});