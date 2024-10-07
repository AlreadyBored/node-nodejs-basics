import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        const pathToFolderToCopy = path.join(__dirname, 'files',);
        const pathToCopiedFolder = path.join(__dirname, 'files_copy');
        await fs.mkdir(pathToCopiedFolder);
        const files = await fs.readdir(pathToFolderToCopy);
        files.forEach(async file => {
            await fs.copyFile(path.join(pathToFolderToCopy, file), path.join(pathToCopiedFolder, file));
        });
        
    } catch {
        throw new FSError();
    }
};

await copy();
