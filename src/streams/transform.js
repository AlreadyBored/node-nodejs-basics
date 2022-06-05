import {Transform} from 'stream';

export const transform = async () => {
    const read_stream = process.stdin;
    const write_stream = process.stdout;
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    read_stream.pipe(transform).pipe(write_stream);
};

transform();
