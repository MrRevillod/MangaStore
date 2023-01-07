/* Se importan los modulos de conexion a bd y encriptacion */

import { Pool } from "../Database.js";

export const GetData = async (res) => {

    try { }

    catch (error) {
        res.status(404).json({ message: "Error on fetching data" });
    }
};

export const GetDataWhere = async (req, res) => { };
