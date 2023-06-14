import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const reverse = (str) => str.split('').reverse().join('');

const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, _, callback) {
            this.push(reverse(chunk.toString()));
            this.push('\n\n');
            callback()
        },
    });

    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();