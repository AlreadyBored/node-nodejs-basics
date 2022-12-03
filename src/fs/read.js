import { readFile } from 'node:fs/promises';
import { isTargetAccessible } from "./helpers/helperFunctions.js";

const read = async (fileToRead) => {
    const isFileExist = isTargetAccessible(fileToRead);

    if (isFileExist) {
        const contents = await readFile(fileToRead, { encoding: 'utf8' });
        console.log(contents);
    } else {
        throw new Error('FS operation failed');
    }

    console.log('SUCCESSFULLY CREATED');
};

await read('./files/fileToRead.txt');
