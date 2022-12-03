import process from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(Array.from(chunk.toString()).reverse().join("").toString());
            callback();
        }
    })
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();