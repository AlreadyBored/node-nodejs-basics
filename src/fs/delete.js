import fs from 'fs/promises';
import path from 'path';
import {getExecutedFileDirname} from "../../helpers.js";
const remove = async () => {
    try {
        const fileNamePath = path.join(getExecutedFileDirname(import.meta.url), 'files', 'fileToRemove.txt');
        await fs.rm(fileNamePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.log(err);
    }
};

await remove();
