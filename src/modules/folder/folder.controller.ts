import type { Request, Response } from 'express';
import type { IFolderController } from './folder.type';
import { WebResponse } from '../../utils/response';
import { FolderService } from './folder.service';
import { FolderRepository } from './folder.repository';

const folderRepository = new FolderRepository();
const folderService = new FolderService(folderRepository);

export class FolderController implements IFolderController {

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const folders = await folderService.getAllFolders();
            res.status(200).json(WebResponse(200, 'Success', folders));
        } catch (error) {
            console.error('Error fetching folders:', error);
            res.status(500).json(WebResponse(500, 'Error fetching folders', error));
        }
    }

    async getSubFolders(req: Request, res: Response): Promise<void> {
        try {
            const parentId = parseInt(req.params.id, 10);
            if (isNaN(parentId)) {
                res.status(400).json(WebResponse(400, 'ID folder tidak valid.', null));
            }
            const folders = await folderService.getSubFolders(parentId);
            res.status(200).json(WebResponse(200, 'Success', folders));
        } catch (error) {
            console.error('Error fetching folders:', error);
            res.status(500).json(WebResponse(500, 'Error fetching folders', error));
        }
    }

    async searchByName(req: Request, res: Response): Promise<void> {
        try {
            const queryTerm = req.query.query as string;
            const folders = await folderService.searchByName(queryTerm);
            res.status(200).json(WebResponse(200, 'Success', folders));
        } catch (error) {
            console.error('Error fetching folders:', error);
            res.status(500).json(WebResponse(500, 'Error fetching folders', error));
        }
    }
}
