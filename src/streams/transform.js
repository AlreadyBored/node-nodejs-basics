import { Transform } from 'stream';
import { pipeline } from 'stream/promises';


const transform = async () => {
    const res = new Transform({
        transform(chunk, enc, cb) {
            const chunkItem = chunk.toString().trim();
            const reversedChunk = chunkItem.split('').reverse().join('');
            cb(null, reversedChunk + '\n');
        },
    });
    pipeline(process.stdin, res, process.stdout);

};

await transform();