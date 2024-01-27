import fs from 'node:fs';
import stream from 'node:stream';

const reverseStream = new stream.Transform({
    transform(chunk, encoding, cb) {
        const result = `${chunk.toString().split('').reverse().join('')}\n\n`;

        cb(null, result)
    }
})

const transform = async () => {
    process.stdin
        .pipe(reverseStream)
        .pipe(process.stdout)
};

await transform();
