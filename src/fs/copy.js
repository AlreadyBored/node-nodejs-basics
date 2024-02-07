import { cp, mkdir } from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const pathFiles = getNecessaryPathInCurrentDir(import.meta.url, 'files');
const pathCopy = getNecessaryPathInCurrentDir(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await mkdir(pathCopy);
        await cp(pathFiles, pathCopy, { recursive: true });
    } catch {
        throw new Error(fsFailed);
    }
};

await copy();
