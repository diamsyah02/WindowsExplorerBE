import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const foldersTable = mysqlTable('folders', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 50 }).notNull(),
  parent_id: int('parent_id'),
});