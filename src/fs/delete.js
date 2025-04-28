import { unlink, access } from 'fs/promises';
import { constants } from 'fs';

const remove = async () => {
    const path = 'files/fileToRemove.txt';

    try {
        await access(path, constants.F_OK);

        await unlink(path);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();