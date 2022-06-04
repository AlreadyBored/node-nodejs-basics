import { Transform } from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(chunk.toString().split('').reverse().join(''));
        }
    })

    const readStr = process.stdin()

    process.stdin.pipe(process.stdout);
};

transform();