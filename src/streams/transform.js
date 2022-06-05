import fs from 'fs';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });
  stdin
    .pipe(reverseText)
    .pipe(stdout);
};

transform();
