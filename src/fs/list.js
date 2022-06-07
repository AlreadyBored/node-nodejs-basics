import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesPath = path.join(__dirname, 'files');

export const list = async () => {
    try {
        const files = await fs.readdir(filesPath);
        console.log(files);
    } catch {
        throw Error('FS operation failed');
    }
};

list();