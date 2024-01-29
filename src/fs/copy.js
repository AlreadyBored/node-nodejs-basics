import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const pathFiles = getNecessaryPathInCurrentDir(import.meta.url, '/files');
const pathCopy = getNecessaryPathInCurrentDir(import.meta.url, '/files_copy');

const copy = async () => {
    if (!existsSync(pathFiles) || existsSync(pathCopy)) {
        throw new Error(fsFailed);
    }

    await mkdir(pathCopy);
    await cp(pathFiles, pathCopy, { recursive: true });
};

await copy();
