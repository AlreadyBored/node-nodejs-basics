import * as fs from 'fs/promises';
import { FsError } from './fs-error.js';


const create = async () => {
    const path = 'src/fs/files/fresh.txt';
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
