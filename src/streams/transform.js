import {Transform} from 'node:stream'
import {stdin, stdout} from 'node:process';

const transform = async () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            const reverserText = chunk.toString().split('').reverse().join('') + '\n\n';
            callback(null, reverserText);
        }
    })
};

const trans = transform()

stdin.pipe(await trans).pipe(stdout);