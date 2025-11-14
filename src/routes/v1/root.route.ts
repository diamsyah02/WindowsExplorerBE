import { Router } from 'express';
import folderRoutes from './folder.route.ts';

const router = Router();

router.use('/folder', folderRoutes);

export default router;