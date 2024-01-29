import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToRead.txt');

const read = async () => {
    if (!existsSync(path)) {
        throw new Error(fsFailed);
    }

    const info = await readFile(path, { encoding: 'utf8' });

    console.log(info);
};

await read();
