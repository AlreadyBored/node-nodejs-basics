import { fs, getFilePath } from "../utils/fs.js";

const fileToRemove = getFilePath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
    fs.rm(fileToRemove, err => {
        if (err) throw new Error('FS operation failed');
    })
};

await remove();