import fs from 'fs';
import url from "url";
import ifExists from "./ifExists.js";
const copy = async () => {
    // Write your code here
    const path = url.fileURLToPath(new URL('.', import.meta.url));
    const folderNameOriginal = path + 'files';
    const folderNameCopy = path + 'files_copy';

    if (!await ifExists(folderNameOriginal) || await ifExists(folderNameCopy)){
        throw new Error('FS operation failed');
    }

    await fs.promises.cp(folderNameOriginal, folderNameCopy, { recursive: true })
};



await copy();
