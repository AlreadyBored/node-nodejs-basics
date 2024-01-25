import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';

const path = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    await rm(path);
};

await remove();
