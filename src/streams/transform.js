import path from 'path';
import {fileURLToPath} from 'url';
import { Transform } from 'stream';
import { createReadStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const transform = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const stream = createReadStream(filePath);
    const inputStream = process.stdin;
    const outputStream = process.stdout;

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
            callback();
        },
    });

    stream.pipe(reverseTransform).pipe(outputStream);
    inputStream.pipe(reverseTransform).pipe(outputStream);

};

await transform();
