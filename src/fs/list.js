import { access, readdir } from 'node:fs/promises';
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

export const list = async () => {
    const dirPath = fileURLToPath(new URL('./files/', import.meta.url));

    try {
        await access(dirPath, constants.R_OK)
            .catch(errorExceptionCb);

    } catch(err) {
        if (err.name === 'FolderError') {
            console.error(err);
            return;
        }
    }

    try {
        const files = await readdir(dirPath);
        console.log(files);

    } catch (err) {
        console.error(err);
    }
};

list();
