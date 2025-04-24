import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const FILE_TO_READ = './src/streams/files/fileToRead.txt';

const read = async () => {
    const readableStream = createReadStream(FILE_TO_READ);
    readableStream.on('data', (chunk) => stdout.write(`${chunk}\n`))
};

await read();