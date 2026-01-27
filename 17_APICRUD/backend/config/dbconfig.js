import mysql from 'mysql2';
import dotenv from 'dotenv';

//si vamos a tener una base de datos en servidor
//import {fileURLToPath} from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//dotenv.config({path: path.resolve(__dirname, '../.env')});
dotenv.config();

const config = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'IPNMYSQLJabs_116',
  database: 'curso',

  //connectionLimit: 10,
  //acquireTimeout: 30000,
  //idleTimeout: 30000,
});

config.getConnection((err) => {
  if (err) {
    console.log('Error de conexion a la base de datos');
    console.log(err);
    return;
  }
  console.log('Base de datos conectada exitosamente');
  connection.release();
});

export default config;