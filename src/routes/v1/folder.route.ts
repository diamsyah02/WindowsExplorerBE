import { Router } from 'express';
import { FolderController } from '../../modules/folder/folder.controller.js';

const folderController = new FolderController();

const router = Router();

router.get('/all', folderController.getAll);
router.get('/:id/children', folderController.getSubFolders);
router.get('/search', folderController.searchByName);

export default router;