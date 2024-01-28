import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString('utf8').split('').reverse().join('');
            this.push(reversedChunk);
            callback();
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();