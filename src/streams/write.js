import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';


const write = async () => {
    const writable = createWriteStream('./files/fileToWrite.txt');
    stdin.pipe(writable);
};

await write();