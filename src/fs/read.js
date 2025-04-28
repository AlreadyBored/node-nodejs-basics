import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_TO_READ = 'fileToRead.txt';

const read = async () => {
    try {
        const pathToFileToRead = path.join(__dirname, 'files', FILENAME_TO_READ);
        const dataFromFile = await fs.readFile(pathToFileToRead, 'utf8');
        console.log(dataFromFile);
    } catch {
        throw new FSError();
    }
};

await read();