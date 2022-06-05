import { access, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

class DeleteFileError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const errorExceptionCb = () => {
    throw new DeleteFileError('FS operation failed');
};

export const remove = async () => {
    const filePath = fileURLToPath(new URL('./files/fileToRemove.txt', import.meta.url));

    try {
        await access(filePath, constants.R_OK | constants.W_OK)
            .catch(errorExceptionCb);

    } catch(err) {
        if (err.name === 'DeleteFileError') {
            console.error(err);
            return;
        }
    }

    try {
        unlink(filePath);
    } catch(err) {
        console.error(err);
    }
};

remove();