import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { unlink } from 'fs/promises';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const remove = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await unlink(pathToFile);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await remove();