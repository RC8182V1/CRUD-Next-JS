// Importar el módulo mysql2
require('dotenv').config();
import { createPool } from "mysql2/promise";

// Crear el pool de conexiones con la base de datos
const connection = createPool({
host: process.env.MYSQL_HOST,
database: process.env.MYSQL_DATABASE,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
});

// Exportar el pool de conexiones como un módulo
module.exports = connection;