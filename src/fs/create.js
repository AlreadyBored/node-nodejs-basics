// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const createdFilePath = path.resolve(__dirname, 'files', 'fresh.txt');
    try {
        // wx flag - fails if file exists
        await writeFile(createdFilePath, 'I am fresh and young ', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();