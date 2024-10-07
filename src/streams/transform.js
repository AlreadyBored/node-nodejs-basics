import { Transform } from 'stream';

    const transform = async () => {

    const readable = process.stdin;
    const writable = process.stdout;

    const tr = new Transform({
        transform(chunk, enc, cb) {
            cb(null, chunk.toString().trim().split('').reverse().join('') + '\n');
        }
    });

    readable.pipe(tr).pipe(writable);
};

await transform();