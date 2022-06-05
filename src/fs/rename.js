import { resolve, dirname } from 'path';
import { rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
 
export const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const oldPath = resolve(__dirname, 'files', 'wrongFilename.txt');
        const newName = resolve(dirname(oldPath), 'properFilename.md');
        await renameFile(oldPath, newName);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

rename();