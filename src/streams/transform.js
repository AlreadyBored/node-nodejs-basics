import { Transform } from 'node:stream';

const transform = async () => {
    const reverseTextTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');

            callback(null, reversedText);
        }
    });

    process.stdin.pipe(reverseTextTransform).pipe(process.stdout);
};

await transform();