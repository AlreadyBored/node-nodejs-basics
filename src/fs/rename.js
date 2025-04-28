import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const wrongFilenamePath = join(DIRNAME, 'files', 'wrongFilename.txt');
    const properFilenamePath = join(DIRNAME, 'files', 'properFilename.md');

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
