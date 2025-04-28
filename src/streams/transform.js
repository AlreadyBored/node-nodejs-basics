import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedData = chunk.toString().split('').reverse().join('');
            this.push(reversedData);
            callback();
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);

    process.stdin.on('error', (writeError) => {
        throw writeError;
    });

    process.stdout.on('error', (readError) => {
        throw readError;
    });

    transformStream.on('error', (transformError) => {
        throw transformError;
    });
    
};

await transform();