import { stdout } from 'process';
import fs from 'fs';
import { dirname, join } from 'path';

const read = async (filePath) => {
    const readStream = fs.createReadStream(filePath);

    readStream.on('error', (error) => {
        console.error('Error reading file', error.message);
    });
    readStream.pipe(stdout);
};
const __dirname = dirname(new URL(import.meta.url).pathname);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

await read(filePath);