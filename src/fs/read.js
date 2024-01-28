import { fs, getFilePath } from "../utils/fs.js";

const fileToRead = getFilePath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    const fileData = fs.readFile(fileToRead, { encoding: 'utf-8' }, (err, data) => {
        if (err) { throw new Error('FS operation failed') }
        console.log(data);
    })
};

await read();