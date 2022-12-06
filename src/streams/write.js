import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const stream = createWriteStream('./src/streams/files/fileToWrite.txt', {
        encoding: 'utf-8',
    });
    stdin.pipe(stream); 
};

await write();