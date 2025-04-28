import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_TO_REMOVE = 'fileToRemove.txt';

const remove = async () => {
    try {
        const pathToFileToDelete = path.join(__dirname, 'files', FILENAME_TO_REMOVE);
        await fs.rm(pathToFileToDelete);
    } catch {
        throw new FSError();
    }
};

await remove();