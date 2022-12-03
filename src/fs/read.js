import {isExistAsync} from "../helpers/isExistAsync.js";
import { readFile } from 'node:fs/promises';

const read = async () => {
    if (await isExistAsync('./files/fileToRead.txt')) {
        try {
            const filePath = new URL('./files/fileToRead.txt', import.meta.url);
            const content = await readFile(filePath, { encoding: 'utf8' });
            console.log(content);
        } catch (err) {
            console.error(err.message);
        }
    } else {
        throw new Error('FS operation failed');
    }
};

await read();