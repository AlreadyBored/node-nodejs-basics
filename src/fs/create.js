import { promises } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fresh.txt');
    try {
        await promises.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();
