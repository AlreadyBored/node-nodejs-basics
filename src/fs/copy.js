import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const copy = async () => {
    const srcDir = path.join(dirname, 'files');
    const destDir = path.join(dirname, 'files-copy');
    try{
        await fs.cp(srcDir, destDir, { recursive: true, force: false, errorOnExist: true })
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();