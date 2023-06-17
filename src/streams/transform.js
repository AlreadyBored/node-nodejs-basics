import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('') + EOL);
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();