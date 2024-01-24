import path from 'path';
import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeable = createWriteStream(filename);
    
    stdin.pipe(writeable);
};

await write();