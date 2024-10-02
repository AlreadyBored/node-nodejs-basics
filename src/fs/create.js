import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const create = async () => {
    try {
        const pathForFile = path.join(dirname, 'files', 'fresh.txt');
        await fs.writeFile(pathForFile, 'I am fresh and young', { flag: 'wx'});
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();