import { rename as renameFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await renameFile(oldPath, newPath)
    } catch {
        console.log('FS operation failed');
    }
};

await rename();