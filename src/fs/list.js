import { fs, getFilePath } from "../utils/fs.js";

const srcForder = getFilePath(import.meta.url, 'files');

const list = async () => {
    fs.readdir(srcForder, (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.map(file => console.log(file));
    });
};

await list();