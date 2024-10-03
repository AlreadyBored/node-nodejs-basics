import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.join(__dirname, 'files');

const list = async () => {
    // Write your code here 
    try {
        const fileList = await fs.readdir(sourcePath);
        console.log(fileList);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();