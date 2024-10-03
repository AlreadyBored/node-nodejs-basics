import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const pathToProperFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    // Write your code here 
    try {
        await fs.rename(pathToWrongFile, pathToProperFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();