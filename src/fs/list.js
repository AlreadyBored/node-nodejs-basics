import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');

const list = async () => {
    try {
        const dirFiles = await fs.readdir(folderPath);
        console.log(dirFiles);
                
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();