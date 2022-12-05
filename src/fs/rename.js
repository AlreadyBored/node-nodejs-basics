import {rename as renamePromises} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const rename = async () => {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const oldFilename = _dirname + '/files/wrongFilename.txt';
        const newFilename = _dirname + '/files/properFilename.txt';
        await renamePromises(oldFilename, newFilename);

        console.log(`renamed file "${oldFilename}" to "${newFilename}"`);
    } catch (err) {
        console.error(err.message);
        throw new Error('FS operation failed');
    }
};

await rename();
