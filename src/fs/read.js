import { readFile } from 'fs/promises';
import { FsError } from './fs-error.js';

const read = async () => {
    try {
        const filePath = 'src/fs/files/fileToRead.txt'
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new FsError();
        }
    }
};

await read();
