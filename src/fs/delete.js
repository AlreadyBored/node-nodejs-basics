import {rm} from "node:fs/promises";
import process from 'node:process';
import path from 'node:path';

export const remove = async () => {
    const currentDir = process.cwd();
    const subDir = '/src/fs/files'
    const fileName = 'fileToRemove.txt';
    const absolutePath = path.join(currentDir, subDir, fileName);

    const STATUS_SUCCESS = 0;

    const rmResult = await rm(absolutePath).catch(err => err);

    if (rmResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    return STATUS_SUCCESS;
};

remove();