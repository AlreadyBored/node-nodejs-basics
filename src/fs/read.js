import {readFile} from "node:fs/promises";
import process from 'node:process';
import path from 'node:path';

export const read = async () => {
    const currentDir = process.cwd();
    const subDir = '/src/fs/files'
    const fileName = 'fileToRead.txt';
    const absolutePath = path.join(currentDir, subDir, fileName);

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