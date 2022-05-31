import {readdir} from "node:fs/promises";
import process from 'node:process';
import path from 'node:path';

export const list = async () => {
    const currentDir = process.cwd();
    const subDir = '/src/fs/files'
    const absolutePath = path.join(currentDir, subDir);

    const STATUS_SUCCESS = 0;

    const listResult = await readdir(absolutePath).catch(err => err);

    if (listResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    console.log(listResult.join('\n'));

    return STATUS_SUCCESS;
};

list();