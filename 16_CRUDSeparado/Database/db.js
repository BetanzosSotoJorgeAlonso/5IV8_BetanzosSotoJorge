const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'IPNMYSQLJabs_116',
    database: 'cursosdb'
});

db.connect((err) => {
    if(err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = db;