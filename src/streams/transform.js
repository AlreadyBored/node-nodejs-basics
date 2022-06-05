import { Transform, pipeline } from 'stream';
import { promisify } from 'util';

const pipe = promisify(pipeline);

export const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });
    
    await pipe(process.stdin, transformStream, process.stdout);
};

transform();