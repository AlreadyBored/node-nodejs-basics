import {Transform} from 'stream';

const transform = async () => {

    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {

            const splittingChunk = chunk.toString().split('');
            const reversedChunk = splittingChunk.reverse().join('')

            callback(null, reversedChunk);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();