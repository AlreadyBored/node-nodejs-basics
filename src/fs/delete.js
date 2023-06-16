import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    fs.unlink(filePath).then(() => {
        
    }).catch(() => {
        throw new Error('FS operation failed')
    });

};

await remove();