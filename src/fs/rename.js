import {rename as fsRename, access} from "node:fs/promises";
import process from 'node:process';
import path from 'node:path';

export const rename = async () => {
    const currentDir = process.cwd();
    const subDir = '/src/fs/files'
    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';
    const absoluteOldPath = path.join(currentDir, subDir, oldName);
    const absoluteNewPath = path.join(currentDir, subDir, newName);

    const STATUS_SUCCESS = 0;

    const accessResultOld = await access(absoluteOldPath).catch(err => err);
    const accessResultNew = await access(absoluteNewPath).catch(err => err);

    if (accessResultOld instanceof Error || !accessResultNew) {
        throw new Error('FS operation failed');
    }

    const renameResult = await fsRename(absoluteOldPath, absoluteNewPath).catch(err => err);

    if (renameResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    return STATUS_SUCCESS;
};

rename();