import process from 'process';
import { Transform } from 'stream';

const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            callback(null, reversedText);
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();