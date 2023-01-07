
/* Se importa el rutificador de express */

import { Router } from "express";
import { GetData } from "../controllers/Data.controllers.js";
import { GetDataWhere } from "../controllers/DataWhere.controllers.js";

const router = Router();

/* Peticiones para manipular informacion "Nosotros" */

router.get('/Mangas/', GetData); // Obtiene la informacion de la seccion "Nosotros"
router.get('/Mangas/:id', GetSearchData); // Actualiza la informacion de la seccion "Nosotros"


export default router;