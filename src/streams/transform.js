import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const transformStream = new Transform({
        transform (chunk, encryption, callback) {
            chunk = chunk.toString();
            chunk = [...chunk].reverse().join('');
            callback(null, chunk);
        }
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();