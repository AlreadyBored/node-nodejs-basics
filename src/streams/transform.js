import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reversedText = (str) => Array.from(str).reverse().join('');

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reversedText(chunk.toString()));
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
