import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files');

const list = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    const list = await readdir(path);

    console.log(list);
};

await list();
