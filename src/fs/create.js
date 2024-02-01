// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
import { writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = path.resolve(__dirname, 'files');
    const createdFilePath = path.resolve(__dirname, 'files', 'fresh.txt');
    try {
        const files = await readdir(filesFolderPath);
        if (files.includes('fresh.txt')) {
            throw new Error('FS operation failed');
        } else  {
            writeFile(createdFilePath, 'I am fresh and young ');
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();