import { readdir, access } from 'fs/promises';
import { constants } from 'fs';

const list = async () => {
    const path = 'files';

    try {
        await access(path, constants.F_OK);

        const files = await readdir(path);

        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();