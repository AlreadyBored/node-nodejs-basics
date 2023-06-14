import { readdir } from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const folderPath = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await readdir(folderPath)
        console.log(files)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();

