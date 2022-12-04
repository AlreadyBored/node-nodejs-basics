import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const rename = async () => {
    const srcFile = path.join(dirname, 'files', 'wrongFilename.txt');
    const destFile = path.join(dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(srcFile, destFile);
    } catch {
        throw new Error('FS operation failed');
    }

};

await rename();