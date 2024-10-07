import fs from 'fs/promises'
import path from 'path'
import {getExecutedFileDirname} from "../../helpers.js";
const read = async () => {
    const filePath = path.join(getExecutedFileDirname(import.meta.url), 'files', 'fileToRead.txt');
    try {
        const content = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();
