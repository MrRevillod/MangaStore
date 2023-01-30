import { Pool } from '../database.js'

export const getMangas = async (req, res) => {

    try {
        const result = await Pool.query("SELECT * FROM mangas");
        const Mangas = result[0];

        if (Mangas.length > 0) { res.status(200).json(Mangas); }

    } catch (error) { res.status(500).json({ message: error.message }); }
}
