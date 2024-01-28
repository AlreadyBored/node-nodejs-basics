import { access, rename as fsRename, constants } from 'node:fs/promises';
import { join } from 'node:path';

const rename = async () => {
    const sourceFile = join('src', 'fs', 'files', 'wrongFilename.txt');
    const destinationFile = join('src', 'fs', 'files', 'properFilename.md');

    try {
        await access(sourceFile, constants.R_OK);

        try {
            await access(destinationFile, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fsRename(sourceFile, destinationFile);
            } else {
                throw new Error('FS operation failed');
            }
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();