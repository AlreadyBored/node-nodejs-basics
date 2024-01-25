import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';

const path = 'src/fs/files';

const list = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    const list = await readdir(path);

    console.log(list);
};

await list();
