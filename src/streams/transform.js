import { Transform } from 'stream';

const transform = () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    reverse.on('error', (error) => {
        console.error(`Error in transformation: ${error.message}`);
    });

    process.stdin.pipe(reverse).pipe(process.stdout);

    process.stdin.on('error', (error) => {
        console.error(`Error reading from stdin: ${error.message}`);
    });
};

await transform();