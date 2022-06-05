import { Transform } from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''))
            callback();
        },
    })

    process.stdin.pipe(reverse).pipe(process.stdout);
};
