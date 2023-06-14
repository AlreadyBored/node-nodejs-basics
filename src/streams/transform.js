import { Transform } from 'node:stream';


const transform = async () => {
    const customTransform = new Transform({
        transform(chunk, encoding, cb) {
            cb(null, chunk.reverse().toString() + '\n');
        },
    });

    process.stdin.pipe(customTransform).pipe(process.stdout);
};

await transform();