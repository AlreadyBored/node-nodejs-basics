import { resolve } from 'path';
import fs from 'fs';

const path = resolve('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
    fs.createReadStream(path).pipe(process.stdout)
};

await read();