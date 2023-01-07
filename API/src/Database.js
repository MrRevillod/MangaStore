/* Importo metodo que permite conexion a bd mysql */

import { createPool } from 'mysql2/promise';

/* Credenciales .env */

import { HOST, USER, PASSWORD, DB_PORT, DATABASE } from './config.js';

/* se crea y exporta la conexion */

export const Pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: DB_PORT,
    database: DATABASE
});

