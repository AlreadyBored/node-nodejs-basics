import fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
    const fileName = './files/wrongFilename.txt';
    const newFileName = './files/properFilename.md';

    try {
        await fs.access(fileName);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(newFileName);
        throw new Error('FS operation failed');
    } catch (err) {
        await fs.rename(fileName, newFileName);
    }
};

await rename();
