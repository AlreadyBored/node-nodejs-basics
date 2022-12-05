import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { existsSync } from "fs";

const copy = async () => {
    try {
        const dirPath     = new URL('files', import.meta.url);
        const destDirPath = new URL('files_copy', import.meta.url);
        if (!existsSync(dirPath) || existsSync(destDirPath)) {
            throw new Error('FS operation failed');
        };
        const files = await readdir(dirPath);
        await mkdir(destDirPath);
        for (let fileName of files) {
            await copyFile(`${dirPath}/${fileName}`, `${destDirPath}/${fileName}`)
        }
    } catch (error) {
        console.log(error.message)
    }
};

copy();