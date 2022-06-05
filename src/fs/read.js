import { readFile } from 'fs/promises';
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const fileToReadPath = dirname(fileURLToPath(import.meta.url)) + '/files/fileToRead.txt'

export const read = async () => {
    try {
        const outputString = await readFile(fileToReadPath, 'utf8');
        console.log(outputString)
    } catch (err) {
        if (err.code === "ENOENT") {
             throw new Error('FS operation failed');
        }
        else {
            console.log("What hAPPEND:" + err);
        }
    }
};
