import { readdir, access } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFiles = path.join(__dirname, 'files');

    try {
        await access(pathToFiles);
        const files = await readdir(pathToFiles);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
