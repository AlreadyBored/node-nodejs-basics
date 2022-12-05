import { Transform } from 'stream';
import {EOL} from 'os'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _encoding, callback) {
            this.push(
                chunk.toString()
                .replace(EOL, '')
                .split('')
                .reverse()
                .join('') + EOL);
            callback();
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();