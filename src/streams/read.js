import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const input = createReadStream('src/streams/files/fileToRead.txt');
    input.on('end', () => {
        console.log('\n');
    })
    input.pipe(stdout);
};

await read();