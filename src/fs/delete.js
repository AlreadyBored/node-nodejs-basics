import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const remove = async () => {
    const toRemove = path.join(dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(toRemove);
    } catch {
        throw new Error('FS operation failed');
    }

};

await remove();