import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises'

const fileToRemove = `${import.meta.dirname}/files/fileToRemove.txt`;

const remove = async () => {
    if (!exists(fileToRemove)) {
        throw Error('FS operation failed');
    }

    await fsAsync.rm(fileToRemove)
};

await remove();