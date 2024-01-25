import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {
    pipeline(
        stdin,
        new Transform({
            transform(chunk, _, cb) {
                cb(null, String(chunk).split('').reverse().join('') + '\n');
            },
        }),
        stdout,
        (err) => { console.log('Operation failed: ' + err) });
};

await transform();