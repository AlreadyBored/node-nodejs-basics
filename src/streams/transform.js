import {stdout, stdin} from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformFiles = new Transform({
        transform(chunk, enc, cb) {
            const chunkStringified = chunk.toString();
            const reverseChunk = chunkStringified.split('').reverse().join('');
            this.push(reverseChunk);
            cb();
        }
    })

    stdin.pipe(transformFiles).pipe(stdout)
};

await transform();