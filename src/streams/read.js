import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const readableStream = createReadStream(__dirname + '\\files\\fileToRead.txt');

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
};

await read();