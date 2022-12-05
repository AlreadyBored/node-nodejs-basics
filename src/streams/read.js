import { createReadStream } from 'node:fs';
import { resolve } from 'path';
import { stdout } from 'node:process';

const read = async () => {
    const absoluteFilePath = await resolve('files', 'fileToRead.txt');
    const readableStream = createReadStream(absoluteFilePath);
    readableStream.pipe(stdout);
};

await read();