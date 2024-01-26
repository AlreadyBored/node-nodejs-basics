import { readFile } from 'fs/promises'
import { throwError } from './error.js';

const read = async () => {
    try {
        const FILE_PATH = './files/fileToRead.txt'
        const contents = await readFile(FILE_PATH, { encoding: 'utf8' });
        console.log(contents);

    } catch(error) {
        throwError()
    }
};

await read();