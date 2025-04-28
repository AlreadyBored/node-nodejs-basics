import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
  try {
    const transform = new Transform({
      transform (chunk, encoding, callback) {
        const chunkStringified = chunk.toString().trim();
        const reversedString = chunkStringified.split('').reverse().join('');

        this.push(reversedString + '\n');

        callback();
      },
    });

    await pipeline(process.stdin, transform, process.stdout);
  } catch (error) {
    throw new Error('transform operation failed');
  }
};

await transform();