import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformInput = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })
    stdin.on('data', data =>
        transformInput.write(data)
    );
    transformInput.on('data', data =>
        stdout.write(data + '\n')
    );
    console.log('Write something, that will be reverse and print. Ctr+C - exist from print mode.');
};

await transform();