// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import { rename as fsRename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const wrongFilenamePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.resolve(__dirname, 'files', 'properFilename.txt');
    try {
        await fsRename(wrongFilenamePath, properFilenamePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await rename();