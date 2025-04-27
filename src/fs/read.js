import {access, readFile} from 'fs/promises';
import {constants} from "fs";

const read = async () => {
    const path = 'src/fs/files/fileToRead.txt';

    const exists = await fileExists(path);

    if (!exists) {
        throw new Error('FS operation failed');
    }

    try {
        const text = await readFile(path, 'utf-8');
        console.log(text);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
