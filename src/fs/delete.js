import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
    try {
        await fs.unlink(fileToRemovePath);
    } catch {
        throw Error('FS operation failed');
    }
};