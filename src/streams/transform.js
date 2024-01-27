import { Transform } from 'stream';
import { pipeline } from 'stream/promises'

const transform = async () => {
    // Write your code here

    const reverseStrStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    await pipeline(process.stdin, reverseStrStream, process.stdout);
};

await transform();