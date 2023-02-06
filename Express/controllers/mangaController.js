import { Pool } from '../database.js'

export const getMangas = async (req, res) => {

    try {
        const result = await Pool.query("SELECT * FROM mangas");
        const Mangas = result[0];
        const data = res.status(200).json(Mangas);

    } catch (error) { res.status(500).json({ message: error.message }) }
}

export const getMangasWhere = async (req, res) => {

    try {
        const { phrase } = req.params;

        const query = `SELECT * FROM mangas WHERE Titulo LIKE '%${phrase}%' OR Autor LIKE '%${phrase}%'`;

        const result = await Pool.query(query);
        const Mangas = result[0];
        const data = res.status(200).json(Mangas);

    } catch (error) { res.status(500).json({ message: error.message }) }
}