import { readFile } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToRead.txt');

const read = async () => {
    try {
        const info = await readFile(path, { encoding: 'utf8' });

        console.log(info);
    } catch {
        throw new Error(fsFailed);
    }
};

await read();
