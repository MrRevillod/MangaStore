import { Router } from 'express';
import { getMangas } from '../controllers/mangaController.js';

const router = Router();
router.get('/', getMangas);

export { router as apiRoutes }