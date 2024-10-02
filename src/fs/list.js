import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const list = async () => {
    try {
        const filesDir = path.join(dirname, 'files');
        const files = await fs.readdir(filesDir);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();