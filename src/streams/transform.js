import { compose, Transform } from 'node:stream';

export const transform = async () => {

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
}
