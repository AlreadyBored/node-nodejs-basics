import { existsSync } from "node:fs";
import {  readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const path = './src/fs/files/fileToRead.txt';
        if (!existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const content = await readFile(path, { encoding: 'utf8' });
            console.log(content)
        }
    } catch (e) {
        console.log(e)
    }
};

await read();