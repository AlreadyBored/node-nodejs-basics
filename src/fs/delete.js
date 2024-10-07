import { rm, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await access(filePath)
        await rm(filePath)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();