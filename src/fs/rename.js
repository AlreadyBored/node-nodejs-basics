/**
 * rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
 */

import * as fs from 'fs/promises';
import { exist } from './exist.js';
import { FsError } from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const rename = async () => {
    const oldPath = `${__dirname}/files/wrongFilename.txt`;
    const newPath = `${__dirname}/files/properFilename.md`;

    const oldPathExists = await exist(oldPath);
    if (!oldPathExists) {
        throw new FsError();
    }

    const newPathExists = await exist(newPath);

    if (newPathExists) {
        throw new FsError();
    }

    await fs.rename(oldPath, newPath);
};

await rename();
