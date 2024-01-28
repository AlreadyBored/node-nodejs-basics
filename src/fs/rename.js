import { promises as fs } from 'fs';
import path from 'path';

const dirBase = path.join('src', 'fs', 'files')
const srcFile = path.join(dirBase, 'wrongFilename.txt');
const destFile = path.join(dirBase, 'properFilename.md');
const errorMsg = "FS operation failed";

const rename = async () => {
    try {
        await fs.access(srcFile);
    } catch (error) {
        throw new Error(errorMsg);
    }

    try {
        await fs.access(destFile);
        throw new Error(errorMsg);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.rename(srcFile, destFile);
        } else {
            throw error;
        }
    }
};

await rename();