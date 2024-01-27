/**
 * implement function that reads data from process.stdin, 
 * reverses text using Transform Stream and then writes it into process.stdout
 */
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    const trans = new Transform();
    trans._transform = function (chunk, _encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
    }

    return stdin.pipe(trans).pipe(stdout);
};

await transform();