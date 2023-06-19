import stream from 'stream'

const transform = async () => {
    const reverseStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            const reversedData = chunk.toString().split("").reverse().join("");
            callback(null, reversedData);
        },
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout)
};

await transform();