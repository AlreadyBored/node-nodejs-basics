import path from 'path';
import { stdout } from 'process';
import { createReadStream } from 'fs';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fileToRead.txt');


const read = async () => {
    const readable = createReadStream(filename)
    
    readable.pipe(stdout);
};

await read();