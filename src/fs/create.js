import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');
const filePath = path.join(folderPath, 'fresh.txt');

const create = async () => {
    try {
        await fs.writeFile(filePath, 'I am fresh and young', {flag:'wx'});
        console.log('File created');
    
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();