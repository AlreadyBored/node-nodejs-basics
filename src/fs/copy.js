import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const filesPath = join(DIRNAME, 'files');
    const filesCopyPath = join(DIRNAME, 'files_copy');

    try {
        await fs.access(filesPath);

        try {
            await fs.access(filesCopyPath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.cp(filesPath, filesCopyPath, {recursive: true});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
