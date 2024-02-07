import { readdir } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, 'files');

const list = async () => {
    try {
        const list = await readdir(path);

        console.log(list);
    } catch {
        throw new Error(fsFailed);

    }
};

await list();
