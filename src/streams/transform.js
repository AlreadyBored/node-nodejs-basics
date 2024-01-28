import stream from 'stream';

const transform = async () => {
    const transformStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('') + '\n';

            callback(null, reversedText);
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
