import { fs, getFilePath } from "../utils/fs.js";
import { pipeline } from 'node:stream';

const filePath = getFilePath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
    const fileStream = fs.createWriteStream(filePath);

    pipeline(process.stdin, fileStream, err => {
        if (err) throw err;
    })
};

await write();