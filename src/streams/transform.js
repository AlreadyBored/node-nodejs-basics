import { Transform } from 'node:stream';
import { stdout, stdin } from 'node:process';

const transform = async () => {

    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const reverse = chunk.toString().split('').reverse().join('')
            callback(null, reverse);
        },
    });

    stdin.pipe(transform).pipe(stdout);
};

await transform();