import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const wrongPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/wrongFilename.txt');
const correctPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/properFilename.md');

const rename = async () => {
    if (!existsSync(wrongPath) || existsSync(correctPath)) {
        throw new Error(fsFailed);
    }

    await fs.rename(wrongPath, correctPath);
};

await rename();
