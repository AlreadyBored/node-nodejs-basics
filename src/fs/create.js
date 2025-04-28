import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const freshPath = join(DIRNAME, 'files', 'fresh.txt');

    try {
        await fs.access(freshPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(freshPath, 'I am fresh and young');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();
