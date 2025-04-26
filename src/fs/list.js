import fs from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.join('src', 'fs', 'files');
const error = new Error('FS operation failed');

const list = async () => {
  try {
    const files = await fs.readdir(folderPath);

    const table = {};

    await Promise.all(
      files.map(async (file) => {
        const fullPath = path.join(folderPath, file);
        const stats = await fs.stat(fullPath);

        if (stats.isFile()) {
          table[file] = {
            size: stats.size,
            createdOn: stats.birthtime.toISOString().split('T')[0],
          };
        }
      })
    );

    console.table(table);
  } catch {
    throw error;
  }
};

await list();
