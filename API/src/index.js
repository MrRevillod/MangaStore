import express from "express";

/* Rutas (router) */

import PublicRoutes from "./Routes/public.routes.js";

/* .env (configuracion y credenciales) */

import './config.js';
import { PORT } from "./config.js";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

/* Se utiliza la transferencia de datos en JSON */

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

/* Rutas base asignadas*/

app.use('/public', PublicRoutes);


app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" })
});

/* Puerto asignado al servidor (.env) */

app.listen(PORT)

// console.log('Server on port ' + PORT);