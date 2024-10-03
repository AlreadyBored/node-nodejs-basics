import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    // Write your code here 
    try {
        await fs.rm(fileToRemove);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();