// implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunck, encoding, callback) {
            const reversedChunk = chunck
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');
            callback(null, reversedChunk + '\n');
        }
    });
    await pipeline(
        process.stdin,
        transformStream,
        process.stdout
    );
};

await transform();