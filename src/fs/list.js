import fs from 'fs';
import path from 'path';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {
    const pathToFiles = path.resolve(__dirname, 'files');
    try {
        const names = await readdir(pathToFiles);
        console.log(names)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();