import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const read = () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const readableStream = createReadStream(pathToFile, 'utf-8');

    readableStream.pipe(stdout);
};

read();
