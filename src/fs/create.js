import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile } from 'node:fs/promises';

const create = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files', 'fresh.txt');
    try {
        await writeFile(path,'I am fresh and young', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
