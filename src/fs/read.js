import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { promises as fs } from 'node:fs';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
        const result = await fs.readFile(pathToFile, 'utf8');
        console.log(result);
    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }
};

await read();