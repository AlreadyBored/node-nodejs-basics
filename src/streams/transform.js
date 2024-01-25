import fs from 'fs';
import { Transform } from 'stream';

const transform = async () => {
  // Write your code here
  const reverseTranform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split('').reverse().join('');
      callback(null, reversedText+'\n');
    },
  });
  process.stdout.write('Type here >');
  process.stdin.pipe(reverseTranform).pipe(process.stdout);
};

await transform();