import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const tr = new Transform({
        transform(input, encoding, callback) {
            callback(null, input.reverse());
        },
    });

    process.stdout.write('Type here:');
    // process.stdin.pipe(tr).pipe(process.stdout);

    await pipeline(process.stdin, tr, process.stdout) // can use both variants!
};

await transform();

// transform.js - implement function that reads data from process.stdin, reverses text using
// Transform Stream and then writes it into process.stdout
