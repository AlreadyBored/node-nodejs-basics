import {stdout, stdin} from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformFiles = new Transform({
        transform(chunk, encoding, cb) {
            this.push(Array.from(chunk.toString()).reverse().join("").toString());
            cb();
        }
    })

    stdin.pipe(transformFiles).pipe(stdout)
};

await transform();