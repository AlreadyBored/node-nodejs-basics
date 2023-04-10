import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';

const __dirname = path.resolve();
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(filePath);
    readStream.on('data', chunk => stdout.write(chunk));
};

await read();