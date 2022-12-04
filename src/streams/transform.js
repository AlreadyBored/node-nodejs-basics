import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const transform = new Transform({
        transform (chunk, enc, cb) {
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');
            this.push(reversedChunk + '\n');
            cb();
        }
    });
    pipeline(
        process.stdin,
        transform,
        process.stdout,
        err => {
            console.log(err);
        }
    );
};

await transform();