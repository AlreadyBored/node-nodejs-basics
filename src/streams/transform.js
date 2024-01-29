import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const revertString = (str) =>
    str.split('').reverse().join('');

const transform = async () => {
  const transformInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, revertString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, transformInput, process.stdout);
};

await transform();