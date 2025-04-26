import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';


const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, _, callback) {
            const reversed = chunk.toString().trim().split('').reverse().join('');
            this.push(reversed + '\n');
            callback();
        }
    });

    await pipeline(
        process.stdin,
        reverseStream,
        process.stdout
    );
};

await transform();
