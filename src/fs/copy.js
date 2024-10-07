import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = async () => {
    const sourDir = path.join(dirname, 'files');
    const targetDir = path.join(dirname, 'files_copy');

    try {
        await fsPromises.access(sourDir);
        await fsPromises.access(targetDir);
        throw new Error('FS operation failed');
    } catch (e) {
        if (e.code !== 'ENOENT') throw new Error('FS operation failed');
    }

    await fsPromises.cp(sourDir, targetDir, { recursive: true });
};

await copy();
