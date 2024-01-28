import { promises as fs } from 'fs';
import path from 'path';

const dirBase = path.join('src', 'fs')
const srcDir = path.join(dirBase, 'files');
const destDir = path.join(dirBase, 'files_copy');
const errorMsgNoExist = "FS operation failed: Source directory does not exist";
const errorMsgDoExist = "FS operation failed: Destination directory already exists";

const copyFiles = async (src, dest) => {
    const files = await fs.readdir(src, { withFileTypes: true });
    await fs.mkdir(dest, { recursive: true });

    for (let f of files) {
        const srcPath = path.join(src, f.name);
        const destPath = path.join(dest, f.name);

        if (f.isDirectory()) {
            await copyFiles(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
};

const copy = async () => {

    try {
        await fs.access(srcDir);
    } catch (error) {
        throw new Error(errorMsgNoExist);
    }

    try {
        await fs.access(destDir);
        throw new Error(errorMsgDoExist);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await copyFiles(srcDir, destDir);
        } else {
            throw error;
        }
    }

};

await copy();
