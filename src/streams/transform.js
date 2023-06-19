import stream from "stream";

const transform = async () => {
    const reverseStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
            callback();
        },
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
