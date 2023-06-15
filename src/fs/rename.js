/**
 * rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
 */

import * as fs from 'fs/promises';
import { exist } from './exist.js';
import { FsError } from './fs-error.js';

const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';

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
