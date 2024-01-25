import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fsFailed } from '../utils/consts/consts.js';

const path = 'src/fs/files/fresh.txt';
const content = 'I am fresh and young';

const create = async () => {
    if (existsSync(path)) {
        throw new Error(fsFailed);
    }

    await writeFile(path, content);
};

await create();
