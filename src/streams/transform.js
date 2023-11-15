import { Transform } from 'stream'

const transform = async () => {
    const transformer = new Transform({
        transform(chunk, enc, cb) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            cb(null, reversedChunk)
        }
    })
    process.stdin.pipe(transformer).pipe(process.stdout);
};

await transform();