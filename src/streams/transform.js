import { Transform } from 'stream';

const transform = async () => {
    try {
        const reserved = new Transform({
            transform(chunk, encoding, callback) {
                callback(null, chunk.toString().split('').reverse().join(''));
            },
        });

        process.stdin.pipe(reserved).pipe(process.stdout);
    } catch (error) {
        throw new Error(error);
    }
}

await transform();