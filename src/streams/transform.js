import {Transform} from 'node:stream';


const transform = async () => {
    const stream = Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString().split('').reverse().join('');

            callback(null, chunk + '\n');
        },
    });

    process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();