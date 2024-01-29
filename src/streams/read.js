import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';


const read = async () => {
    const content = createReadStream('./files/fileToRead.txt');

    content.pipe(stdout);
};

await read();