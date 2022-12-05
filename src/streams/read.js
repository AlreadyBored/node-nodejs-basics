import { createReadStream } from 'node:fs';
import { resolve } from 'path';
import { stdout } from 'node:process';

const read = async () => {
    const absolutePath = await resolve('files', 'fileToRead.txt');
    const readableStream = createReadStream(absolutePath);
    readableStream.pipe(stdout);
};

await read();