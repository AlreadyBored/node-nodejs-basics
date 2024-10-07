import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { promises as fs } from 'node:fs';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');
        //await fs.access(pathToFile);
        await fs.rm(pathToFile);

    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }

};

await remove();