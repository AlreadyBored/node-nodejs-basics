// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const wrongFilenamePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.resolve(__dirname, 'files', 'properFilename.txt');
    try {
        await fs.statfs(wrongFilenamePath);
    } catch {
        throw new Error('FS operation failed');
    }
    try {
        await fs.statfs(properFilenamePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.rename(wrongFilenamePath, properFilenamePath);
        }
    }

};

await rename();