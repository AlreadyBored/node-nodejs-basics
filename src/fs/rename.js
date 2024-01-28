import { fs, getFilePath } from "../utils/fs.js";

const oldFile = getFilePath(import.meta.url, 'files', 'wrongFilename.txt');
const newFile = getFilePath(import.meta.url, 'files', 'properFilename.md');

const rename = async () => {
    fs.rename(oldFile, newFile, err => {
        if (err) { throw new Error('FS operation failed') }
    });
};

await rename();