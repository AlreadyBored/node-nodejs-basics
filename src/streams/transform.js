import { Transform } from 'stream'

const transform = async () => {
    const tr = new Transform({
        transform(input, encoding, callback) {
            callback(null,
                input.reverse()
            );
        }
    });

    process.stdin.pipe(tr).pipe(process.stdout);
};

await transform();

// transform.js - implement function that reads data from process.stdin, reverses text using
// Transform Stream and then writes it into process.stdout
