import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
    const filesPath = 'files';
    const wrongFilenamePath = join(filesPath, 'wrongFilename.txt');
    const properFilenamePath = join(filesPath, 'properFilename.md');

    try {
        await fs.access(wrongFilenamePath);

        try {
            await fs.access(properFilenamePath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.rename(wrongFilenamePath, properFilenamePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
