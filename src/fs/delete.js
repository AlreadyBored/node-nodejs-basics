import path from 'node:path';
import { getDirName } from './getDir.js';
import fs from 'node:fs';
import fsPromises from 'fs/promises';

const remove = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files/fileToRemove.txt');

    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    return fsPromises.unlink(filePath);
};

await remove();