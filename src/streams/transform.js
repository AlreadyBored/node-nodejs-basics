import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _enc, cb) {
      cb(null, chunk.toString().split('').reverse().join(''));
    },
  });

  try {
    await pipeline(process.stdin, reverse, process.stdout);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

await transform();
