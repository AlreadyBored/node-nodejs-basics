import {readFile} from "node:fs/promises";
import url from 'node:url';
import path from 'node:path';

export const read = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToRead.txt';
    const absolutePath = path.join(__dirname, subDir, fileName);

    const STATUS_SUCCESS = 0;

    const readResult = await readFile(absolutePath, {
        encoding: "UTF8",
    }).catch(err => err);

    if (readResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    console.log(readResult);

    return STATUS_SUCCESS;
};

read();