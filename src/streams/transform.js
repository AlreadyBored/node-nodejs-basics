import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, _, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            callback(null, reversedText);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
