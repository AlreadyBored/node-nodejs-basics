import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

class FileError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const errorExceptionCb = () => {
    throw new FileError('FS operation failed');
};

export const read = async () => {
    const filePath = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));

    try {
        await access(filePath, constants.R_OK)
            .catch(errorExceptionCb);

    } catch(err) {
        if (err.name === 'FileError') {
            console.error(err);
            return;
        }
    }

    try {
        await readFile(filePath, 'utf-8')
            .then(console.log);
    } catch(err) {

    }
};

read();
