import { pipeline } from 'node:stream/promises';
import process from 'node:process';

import { Transform } from 'node:stream';

const readable = process.stdin;
const writeable = process.stdout;

const transform = async () => {
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const chunkStringified = chunk.toString().trim();

      const reversedChunk = chunkStringified.split('').reverse().join('');

      cb(null, reversedChunk + `\n`);
    },
  });

  try {
    const f = await pipeline(readable, transform, writeable);
  } catch (error) {
    console.log(error);
  }
};

await transform();
