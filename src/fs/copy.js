import { fs, getFilePath } from "../utils/fs.js";

const srcForder = getFilePath(import.meta.url, 'files');
const destForder = getFilePath(import.meta.url, 'files_copy');

const copy = async () => {
    if (fs.existsSync(destForder)) {
        throw new Error('FS operation failed');
        return;
    }
    fs.cp(srcForder, destForder, { recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await copy();