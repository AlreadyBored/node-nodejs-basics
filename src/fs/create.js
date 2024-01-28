import { fs, getFilePath } from "../utils/fs.js";

const create = async () => {
    const dataText = 'I am fresh and young';
    const errText = 'FS operation failed';
    const filePath = getFilePath(import.meta.url, 'files', 'fresh.txt');

    fs.writeFile(filePath, dataText, { flag: 'wx' }, err => {
        if (err) { throw new Error(errText) }
    });
};

await create();