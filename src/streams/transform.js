/**
 * implement function that reads data from process.stdin, 
 * reverses text using Transform Stream and then writes it into process.stdout
 */
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    const trans = new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join('').concat("\n"));
        }
    });

    return stdin.pipe(trans).pipe(stdout);
};

await transform();