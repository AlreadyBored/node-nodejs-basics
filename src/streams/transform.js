import { Transform } from 'node:stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed + '\n');
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();