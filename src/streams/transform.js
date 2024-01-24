import { Transform } from 'stream';
import {stdin, stdout} from 'process';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const data = chunk.toString().trim().split('').reverse().join('') + '\n';
            callback(null, data);
        }
    })

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();