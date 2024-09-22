import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';


const read = async () => {
    try {
        const dirPath = getDirPath(import.meta.url);
        const filePath = path.join(dirPath, 'files', 'fileToRead.txt');
        const content = await fs.readFile(filePath, { encoding: "utf-8" });

        console.log(content)

        return content;
    } catch {
        throw Error('FS operation failed');
    }
};

read()
    .then(() => {
        console.info('Success');
    })
    .catch(err => {
        console.error(err.message);
    });
