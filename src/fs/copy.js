import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
    const filesPath = join('files');
    const filesCopyPath = join('files_copy');

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

        await fs.cp(filesPath, filesCopyPath, { recursive: true });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
