import {rename as fsRename, access} from "node:fs/promises";
import url from 'node:url';
import path from 'node:path';

export const rename = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const subDir = 'files'
    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';
    const absoluteOldPath = path.join(__dirname, subDir, oldName);
    const absoluteNewPath = path.join(__dirname, subDir, newName);

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