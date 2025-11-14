import { jest } from '@jest/globals';
import { FolderService } from '../../modules/folder/folder.service.js'; 
import type { IFolderRepository, Folder } from '../../modules/folder/folder.type.js'; 

const mockFolders: Folder[] = [
    { id: 1, name: 'Root Docs', parent_id: null },
    { id: 2, name: 'Laporan Kuartal', parent_id: 1 },
    { id: 3, name: 'File Proyek Lama', parent_id: 1 },
    { id: 4, name: 'Data Cadangan', parent_id: 2 },
];

const mockFolderRepository: IFolderRepository = {
    findAll: jest.fn(async () => mockFolders),

    findChildrenByParentId: jest.fn(async (parentId: number) => {
        return mockFolders.filter(f => f.parent_id === parentId);
    }),

    searchByName: jest.fn(async (queryTerm: string) => {
        const term = queryTerm.toLowerCase();
        return mockFolders.filter(f => f.name.toLowerCase().includes(term));
    }),
};
const folderService = new FolderService(mockFolderRepository);


describe('FolderService Unit Tests (Termasuk Search)', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call repository.findAll and return all folders', async () => {
        const result = await folderService.getAllFolders();

        expect(result).toEqual(mockFolders);
        expect(mockFolderRepository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return correct children for a specific parentId (1)', async () => {
        const parentId = 1;
        const expectedChildren = [
            { id: 2, name: 'Laporan Kuartal', parent_id: 1 },
            { id: 3, name: 'File Proyek Lama', parent_id: 1 },
        ];

        const result = await folderService.getSubFolders(parentId);

        expect(result).toEqual(expectedChildren);
        expect(mockFolderRepository.findChildrenByParentId).toHaveBeenCalledWith(parentId);
    });

    it('should call repository.searchByName and return folders matching the query', async () => {
        const searchTerm = 'data';
        const expectedResult = [
            { id: 4, name: 'Data Cadangan', parent_id: 2 },
        ];

        const result = await folderService.searchByName(searchTerm);

        expect(result).toEqual(expectedResult);
        expect(mockFolderRepository.searchByName).toHaveBeenCalledWith(searchTerm);
    });
});