import { open, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

class CreateFileError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

export const create = async () => {
    const filePath = fileURLToPath(new URL('./files/fresh.txt', import.meta.url));
    try {
        await access(filePath, constants.R_OK | constants.W_OK);
        throw new CreateFileError('FS operation failed');
    } catch(err) {
        if (err.name === 'CreateFileError') {
            console.error(err);
            return;
        }
    }

    await open(filePath, 'w');
    await writeFile(filePath, 'I am fresh and young');
};

create();