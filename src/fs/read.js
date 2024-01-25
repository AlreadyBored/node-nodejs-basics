import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';

const path = 'src/fs/files/fileToRead.txt';

const read = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    const info = await readFile(path, { encoding: 'utf8' });

    console.log(info);
};

await read();
