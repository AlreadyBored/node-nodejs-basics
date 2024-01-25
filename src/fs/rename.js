import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';

const wrongPath = 'src/fs/files/wrongFilename.txt';
const correctPath = 'src/fs/files/properFilename.md';

const rename = async () => {
    if (!existsSync(wrongPath) || existsSync(correctPath)) {
        throw new Error(fsFailed);
    }

    await fs.rename(wrongPath, correctPath);
};

await rename();
