import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');
const filePath = path.join(folderPath, 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.rm(filePath, {force: true});
        console.log('File is deleted');
                
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();