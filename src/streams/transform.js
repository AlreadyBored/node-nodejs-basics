import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

export const transform = async () => {
    const readableStream = stdin;
    const writableStream = stdout;
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    readableStream.pipe(transformStream).pipe(writableStream);
};

transform();
