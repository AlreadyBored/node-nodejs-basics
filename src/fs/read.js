import { readFile } from 'node:fs/promises';
import {existsSync} from "node:fs";

const read = async () => {
    // Write your code here
    const filePath = './files/fileToRead.txt';

    if (existsSync(filePath)) {
        const fileData = await readFile(filePath, {encoding: 'utf8'});
        console.log(fileData);
    } else {
        throw new Error('FS operation failed');
    }
};

await read();