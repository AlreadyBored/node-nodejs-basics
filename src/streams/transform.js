import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
  const transformInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, (chunk.toString()).split('').reverse().join(''));
    },
  });

  await pipeline(process.stdin, transformInput, process.stdout);
};

await transform();