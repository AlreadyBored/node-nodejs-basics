import { Transform } from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.reverse());
            callback();
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

transform()