import * as fs from 'fs/promises';
import { FsError } from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const create = async () => {
    const path =  `${__dirname}/files/fresh.txt`;
    const content = 'I am fresh and young';
    try {
        await fs.writeFile(path, content, {flag: 'wx'});
    } catch(err) {
        if (err.code === 'EEXIST') {
            throw new FsError()
        }
    }
};

await create();
