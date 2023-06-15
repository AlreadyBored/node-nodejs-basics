import { access, cp, mkdir } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToCopy = path.join(__dirname, 'files');
    const pathToPast = path.join(__dirname, 'files_copy');

    try {
        await access(pathToCopy);
        await mkdir(pathToPast);
        await cp(pathToCopy, pathToPast, {
            recursive: true
        });
    } catch (error) {
        if (error.code === 'EEXIST' || error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await copy();
