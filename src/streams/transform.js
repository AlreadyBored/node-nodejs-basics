import {stdout, stdin} from 'node:process';
import {Transform} from "node:stream"

const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }}
    );

    stdin.pipe(stream).pipe(stdout)
};

await transform();