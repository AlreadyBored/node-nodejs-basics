import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rename = async () => {
    const oldPath = path.join(dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(dirname, 'files', 'wrongFilename.txt');

    try {
        await fs.access(oldPath);
        await fs.access(newPath);
        throw new Error('FS operation failed');
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    await fs.rename(oldPath, newPath);
};

await rename();
