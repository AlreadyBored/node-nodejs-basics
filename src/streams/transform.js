import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const rev = chunk.toString().split('').reverse().join('');
            callback(null, rev);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
    
};

await transform();