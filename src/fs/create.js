import fs from 'fs/promises';
import path from 'path';
import {getExecutedFileDirname} from "../../helpers.js";

const create = async () => {
    try {
        const filePath = path.join(getExecutedFileDirname(import.meta.url), 'files', 'fresh.txt');
        await fs.writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
        console.log('File created successfully!');
    } catch( e) {
        console.log('e ', e);
        throw new Error('FS operation failed')
    }
};

await create();
