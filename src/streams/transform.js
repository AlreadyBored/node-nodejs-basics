import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    // Write your code here 
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk + '\n');
        }
    });

    await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();