import fs from 'node:fs/promises';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const wrongPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/wrongFilename.txt');
const correctPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/properFilename.md');

const rename = async () => {
    try {
        await fs.rename(wrongPath, correctPath);
    } catch {
        throw new Error(fsFailed);
    }
};

await rename();
