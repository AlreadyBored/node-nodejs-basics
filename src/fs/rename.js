import { rename as asyncRename } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const oldName = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newName = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await asyncRename(oldName, newName);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();
