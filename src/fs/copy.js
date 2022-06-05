import { access, mkdir, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

class FolderError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const errorExceptionCb = () => {
    throw new FolderError('FS operation failed');
};

export const copy = async () => {
    const newDirPath = fileURLToPath(new URL('./files_copy/', import.meta.url));
    const dirPath = fileURLToPath(new URL('./files/', import.meta.url));

    try {
        await access(newDirPath, constants.R_OK | constants.W_OK)
            .then(errorExceptionCb);

        await access(dirPath, constants.R_OK | constants.W_OK)
            .catch(errorExceptionCb);

    } catch(err) {
        if (err.name === 'FolderError') {
            console.error(err);
            return;
        }
    }

    try {
        await mkdir(newDirPath);
        const files = await readdir(dirPath);

        for (const file of files) {
            await copyFile(`${dirPath}${file}`, `${newDirPath}${file}`);
        }

    } catch (err) {
        console.error(err);
    }
};

copy();