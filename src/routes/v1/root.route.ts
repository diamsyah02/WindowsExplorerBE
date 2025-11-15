import { Router } from 'express';
import folderRoutes from './folder.route';

const router = Router();

router.use('/folder', folderRoutes);

export default router;