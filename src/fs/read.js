import { readFile } from 'fs/promises';

const FILE_PATH = 'files/fileToRead.txt';
const ENCODING = 'utf-8';
const FILE_EXISTS_ERROR_MESSAGE = 'FS operation failed';

export const read = async () => {
    try {
        const contents = await readFile(FILE_PATH, ENCODING);
        console.log(contents);
    } catch {
        throw new Error(FILE_EXISTS_ERROR_MESSAGE);
    }
};
