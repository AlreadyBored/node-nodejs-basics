import fs from 'fs/promises';
import {join} from 'path';
import {getExecutedFileDirname} from "../../helpers.js";
const copy = async () => {
    try {
        const executedFileDirname = getExecutedFileDirname(import.meta.url);
        const sourceFolderPath = join(executedFileDirname, 'files');
        const destinationFolderPath = join(executedFileDirname, 'files_copy');

        await fs.cp(sourceFolderPath, destinationFolderPath, { recursive: true, errorOnExist: true, force: false });
        console.log('Copy operation successful');
    } catch {
        throw new Error('FS operation failed')
    }
};

await copy();
