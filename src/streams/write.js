import { createWriteStream } from 'fs';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const writable = createWriteStream(`${__dirname}/files/fileToWrite.txt`);

const write = async () => {
    process.stdin.on('data', chunk => writable.write(chunk.toString()));
};

await write();