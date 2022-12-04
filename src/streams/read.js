import { resolve } from 'path';
import fs from 'node:fs';

const path = resolve('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
    fs.createReadStream(path).on('data', (data) => process.stdout.write(data))
};

await read();