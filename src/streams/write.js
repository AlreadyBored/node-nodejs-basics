import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const PATH = './src/streams/files/fileToWrite.txt';

const write = async () => {
    const writeableStream = createWriteStream(PATH);
    stdin.pipe(writeableStream);
};

await write();