// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import * as fs from 'node:fs/promises';

const rename = async () => {
    const oldPath = './files/wrongFilename.txt';
    const newPath = './files/properFilename.md';
    try {
        await fs.statfs(oldPath);
    } catch {
        throw new Error('FS operation failed');
    }
    try {
        await fs.statfs(newPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.rename(oldPath, newPath);
        }
    }

};

await rename();