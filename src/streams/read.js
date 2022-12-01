import { createReadStream } from 'fs';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const readable = createReadStream(`${__dirname}/files/fileToRead.txt`);

const read = async () => {
    let content = '';
    readable.on('data', chunk => content += chunk.toString());
    readable.on('end', () => process.stdout.write(content));
};

await read();