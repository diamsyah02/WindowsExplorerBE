import type { Folder, IFolderService, IFolderRepository } from "./folder.type";

export class FolderService implements IFolderService {
    private folderRepository: IFolderRepository;

    constructor(folderRepository: IFolderRepository) {
        this.folderRepository = folderRepository;
    }

    async getAllFolders(): Promise<Folder[]> {
        const folders = await this.folderRepository.findAll();
        return folders;
    }

    async getSubFolders(parentId: number): Promise<Folder[]> {
        const folders = await this.folderRepository.findChildrenByParentId(parentId);
        return folders;
    }

    async searchByName(queryTerm: string): Promise<Folder[]> {
        const folders = await this.folderRepository.searchByName(queryTerm);
        return folders;
    }
}
