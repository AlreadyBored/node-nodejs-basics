import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""));
        },
        flush(callback) {
            callback(null, '\n')
        }
    });
      
    stdin.pipe(transformStream).pipe(stdout);
      
};

await transform();