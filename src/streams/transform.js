import { Transform } from 'node:stream';

const transform = async () => {
    const stdin = process.stdin.on('data', () => {});

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk
                .toString()
                .split('')
                .reverse()
                .join('')
            );
        },
    });

    stdin
        .pipe(reverse)
        .pipe(process.stdout);
};

await transform();
