import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        writableObjectMode: false,
        transform(chunk, encoding, callback) {
            this.push(`${chunk.toString().split('').reverse().join('')}\n`);

            callback();
        }
    });

    myTransform.setEncoding('utf-8');

    stdin.pipe(myTransform).pipe(stdout);
};

await transform();