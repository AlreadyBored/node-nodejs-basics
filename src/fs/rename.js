import path from 'node:path';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import { getDirName } from './getDir.js';

const rename = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files/wrongFilename.txt');
    const destinationFilePath = path.join(getDirName(import.meta.url), './files/properFilename.md');
    if (fs.existsSync(destinationFilePath) || !fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }
    return fsPromises.rename(filePath, destinationFilePath);
};

await rename();