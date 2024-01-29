import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    if (existsSync(path)) {
        throw new Error(fsFailed);
    }

    await writeFile(path, content);
};

await create();
