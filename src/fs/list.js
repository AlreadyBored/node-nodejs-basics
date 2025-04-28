import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const filesPath = join(DIRNAME, 'files');

    try {
        await fs.access(filesPath);
        const files = await fs.readdir(filesPath);

        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
