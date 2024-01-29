import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToRemove.txt');

const remove = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    await rm(path);
};

await remove();
