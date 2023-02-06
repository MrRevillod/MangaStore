import { Router } from 'express';
import { getMangas, getMangasWhere } from '../controllers/mangaController.js';

const router = Router();
router.get('/mangas', getMangas);
router.get('/mangas/:phrase', getMangasWhere);

export { router as apiRoutes }