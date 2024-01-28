import { access, readdir, constants } from 'node:fs/promises';
import { join } from 'node:path';

const list = async () => {
    const folderPath = join('src', 'fs', 'files');

    try {
        await access(folderPath, constants.R_OK);

        const files = await readdir(folderPath);

        files.forEach((file) => {
            console.log(file);
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await list();