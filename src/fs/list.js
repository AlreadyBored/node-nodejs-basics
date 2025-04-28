import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const list = async () => {
    try {
        const folderPath = path.join(__dirname, 'files');
        const files = await fs.readdir(folderPath);
        console.log(files);
    } catch {
        throw new FSError();
    }
};

await list();