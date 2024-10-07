import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const list = async () => {
    const readPath = path.join(dirname, 'files');

    try {
        await fs.access(readPath);
        const files = await fs.readdir(readPath);

        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
