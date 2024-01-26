import {readFile} from 'node:fs/promises';

const read = async () => {
    try {
        const filePath = new URL('./files/fileToRead.txt', import.meta.url);
        const contents = await readFile(filePath, {encoding: 'utf8'});
        console.log(contents);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await read();


