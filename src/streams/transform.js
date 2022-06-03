import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
    const revers = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    stdin.pipe(revers).pipe(stdout);
};
transform()
