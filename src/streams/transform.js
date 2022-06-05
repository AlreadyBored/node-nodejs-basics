import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';


export const transform = async () => {
    const transform = new Transform({
        transform(chunk, enc, callback) {
            const stringChunk = chunk.toString().trim();
            const reversChunk = stringChunk.split('').reverse().join('');
            callback(null, reversChunk + '\n');
        }
    });
    
    pipeline(
        stdin,
        transform,
        stdout,
        err => {
            console.log(err)
        }
    )
};

transform();
