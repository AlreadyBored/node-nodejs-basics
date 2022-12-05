import { access, mkdir, readdir, copyFile } from "node:fs/promises";

const copy = async () => {
    const srcPath = './src/fs/files/';
    const targetPath = './src/fs/files_copy/';

    try {
        await access(srcPath);
        await mkdir(targetPath);
    } catch {
        throw new Error('FS operation failed'); 
    }

    try {
        const files = await readdir(srcPath);
        for (const file of files) {
            await copyFile(`${srcPath}${file}`, `${targetPath}${file}`)
        }
    } catch (err) {
        console.error(err);
    }
};

await copy();
