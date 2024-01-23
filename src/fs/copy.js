import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed';


const makeDir = async (path) => {
    try {
        await mkdir(path);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
}

const copyF = async (oldPath, newPath) => {
    try {
        copyFile(oldPath, newPath);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
}

const readDir = async (path) => {
    try {
        const content = await readdir(path);
        return content;
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
}

const copy = async () => {
    const pathToOldDir = join(__dirname, 'files');
    const pathToNewDir = join(__dirname, 'files_copy');

    await makeDir(pathToNewDir);
    let content = await readDir(pathToOldDir);

    content.forEach(i => copyF(join(pathToOldDir, i), join(pathToNewDir, i)));
};

await copy();
