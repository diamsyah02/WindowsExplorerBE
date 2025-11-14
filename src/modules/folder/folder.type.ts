import type { Request, Response } from 'express';

export interface Folder {
    id: number;
    name: string;
    parent_id: number | null;
}

export interface IFolderController {
    getAll(req: Request, res: Response): Promise<void>;
    getSubFolders(req: Request, res: Response): Promise<void>;
    searchByName(req: Request, res: Response): Promise<void>;
}

export interface IFolderService {
    getAllFolders(): Promise<Folder[]>;
    getSubFolders(parentId: number): Promise<Folder[]>;
    searchByName(queryTerm: string): Promise<Folder[]>;
}

export interface IFolderRepository {
    findAll(): Promise<Folder[]>;
    findChildrenByParentId(parentId: number): Promise<Folder[]>;
    searchByName(queryTerm: string): Promise<Folder[]>;
}