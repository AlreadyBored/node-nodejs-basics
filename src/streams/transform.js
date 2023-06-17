import { Transform, pipeline } from 'stream';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');

            callback(null, reversedChunk + '\n\n');
        }
    });

    pipeline(
        process.stdin,
        transform,
        process.stdout,
        (err) => {
            console.error(err);
        }
    );
};

await transform();