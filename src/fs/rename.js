import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { promises as fs } from 'node:fs';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'wrongFilename.txt');
        const pathToCorrectFile = path.join(__dirname, 'files', 'properFilename.md');
        await fs.rename(pathToFile, pathToCorrectFile);
        
    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }
};

await rename();