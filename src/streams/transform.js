import fs from 'fs';
import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().split('').reverse().join('');
            callback(null, transformedChunk);
        }
    });

    process.stdin
        .pipe(transformStream)
        .pipe(process.stdout);
};

await transform();