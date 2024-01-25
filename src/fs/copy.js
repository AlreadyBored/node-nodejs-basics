import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';

const pathFiles = 'src/fs/files';
const pathCopy = 'src/fs/files_copy';

const copy = async () => {
    if (!existsSync(pathFiles) || existsSync(pathCopy)) {
        throw new Error(fsFailed);
    }

    await mkdir(pathCopy);
    await cp(pathFiles, pathCopy, { recursive: true });
};

await copy();
