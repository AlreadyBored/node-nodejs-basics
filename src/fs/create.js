import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt');
    const data = 'I am fresh and young';

    try {
        await writeFile(file, data, { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();
