import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    try {
        const pathToCreatedFile = path.join(__dirname, 'files', 'fresh.txt');
        await fs.writeFile(pathToCreatedFile, 'I am fresh and young', { flag: 'wx' })
    } catch {
        throw new FSError();
    }
};

await create();