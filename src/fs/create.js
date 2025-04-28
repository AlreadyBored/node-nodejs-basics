import { access, writeFile } from 'fs/promises';
import { constants } from 'fs';

const path = 'files/fresh.txt'

const create = async () => {
    try {
        await access(path, constants.F_OK);

        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(path, 'I am fresh and young');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();