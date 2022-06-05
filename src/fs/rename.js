import { access, rename as renameFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

class WrongFileError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const errorExceptionCb = () => {
    throw new WrongFileError('FS operation failed');
};

export const rename = async () => {
    const wrongFilenamePath = fileURLToPath(new URL('./files/wrongFilename.txt', import.meta.url));
    const properFilenamePath = fileURLToPath(new URL('./files/properFilename.md', import.meta.url));

    try {
        await access(properFilenamePath, constants.R_OK | constants.W_OK)
            .then(errorExceptionCb);

        await access(wrongFilenamePath, constants.R_OK | constants.W_OK)
            .catch(errorExceptionCb);

    } catch(err) {
        if (err.name === 'WrongFileError') {
            console.error(err);
            return;
        }
    }

    try {
        renameFile(wrongFilenamePath, properFilenamePath);
    } catch(err) {
        console.error(err);
    }
};

rename();
