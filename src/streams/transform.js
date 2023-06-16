import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    },
  });
  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
