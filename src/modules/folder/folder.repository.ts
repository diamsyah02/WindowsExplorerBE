import { asc, eq, like } from "drizzle-orm";
import { db } from "../../configs/db/index.js";
import { foldersTable } from "../../configs/db/schema.js";
import type { Folder, IFolderRepository } from "./folder.type.js";

export class FolderRepository implements IFolderRepository {
    async findAll(): Promise<Folder[]> {
        try {
            const result = await db.select().from(foldersTable).orderBy(asc(foldersTable.parent_id), asc(foldersTable.name));
            return result;
        } catch (error) {
            console.error('Error fetching folders:', error);
            throw error;
        }
    }

    async findChildrenByParentId(parentId: number): Promise<Folder[]> {
        try {
            const result = await db.select().from(foldersTable).where(eq(foldersTable.parent_id, parentId));
            return result;
        } catch (error) {
            console.error('Error fetching folders:', error);
            throw error;
        }
    }

    async searchByName(queryTerm: string): Promise<Folder[]> {
        try {
            const searchTerm = `%${queryTerm}%`;
            
            const result = await db.select()
                .from(foldersTable)
                .where(like(foldersTable.name, searchTerm)) 
                .orderBy(asc(foldersTable.name));
                
            return result as Folder[];
        } catch (error) {
            console.error('Drizzle Error [searchByName]:', error);
            throw error;
        }
    }
}
