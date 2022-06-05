import { Transform } from 'stream';

export const transform = async () => {
    const createReverseDataStream = () => {
        return new Transform({
            transform(chunk, encoding, callback) {
                const data = chunk.toString().split('').reverse().join('');
                callback(null, data);
            }
        });
    }
    process.stdin.pipe(createReverseDataStream()).pipe(process.stdout);
};

await transform();