import { Router } from 'express';
import folderRoutes from './folder.route.js';

const router = Router();

router.use('/folder', folderRoutes);

export default router;