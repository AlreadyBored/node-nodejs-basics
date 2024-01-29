import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const reverseData = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const reverse = chunk.toString().split('').reverse().join('');
      cb(null, reverse);
    }
  });
};

const reverse = reverseData();

const transform = async () => {
  await pipeline(
    stdin,
    reverse,
    stdout
  );
};

await transform().catch(console.error);
