import { cp, access, constants } from 'node:fs/promises';
import { resolve } from 'node:path';
const copy = async () => {
    const src = resolve('src/fs/files');
    const dest = resolve('src/fs/files_copy');
    try {
        await access(src, constants.F_OK);
        try {
            await access(dest, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
        await cp(src, dest, { recursive: true });

    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
