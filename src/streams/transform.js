import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// transform.js - implement function that reads data from process.stdin,
// reverses text using Transform Stream and then writes it into process.stdout

const transform = async () => {
    // Write your code here

    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            const str = chunk.toString();
            const reversed = str.split('').reverse().join('');
            callback(null, reversed + '\n');
        },
    });

    await pipeline(process.stdin, reverseString, process.stdout);
};

await transform();
