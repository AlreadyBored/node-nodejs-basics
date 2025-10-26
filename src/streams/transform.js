import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const transform = async () => {
  const mockData = process.stdin ? Readable.from('Hello world\n') : process.stdin;

  const reverseTransform = new Transform({
  transform(chunk, _enc, cb) {
    const reversed = chunk.toString('utf8').split('').reverse().join('');
    cb(null, reversed);
  }
});

try {
    await pipeline(mockData, reverseTransform, process.stdout);
  } catch {
    console.error('Stream operation failed');
  }
};

await transform();
