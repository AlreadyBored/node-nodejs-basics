import { Transform, pipeline } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, cb) {
            const chunkString = chunk.toString().trim();
            const reversedChunkString = chunkString.split('').reverse().join('');

            cb(null, reversedChunkString + '\n');
        }
    });

    pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        err => {
            throw new Error(err);
        }
    );
};

await transform();