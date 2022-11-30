import process from 'node:process';
import fs from 'node:fs';

import { Transform } from 'stream';

const reverseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split('').reverse().join(''));
    callback();
  }
});


const transform = async () => {
    // Write your code here 
    process.stdin
        .pipe(reverseTr)
        .pipe(process.stdout)
};

await transform();
