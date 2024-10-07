import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const remove = async () => {
    const deletePath = path.join(dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(deletePath);
        await fs.unlink(deletePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
