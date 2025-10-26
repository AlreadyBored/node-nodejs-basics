import { Transform } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split('').reverse().join('');
      callback(null, reversed);
    }
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  await new Promise((resolve, reject) => {
    reverseStream.on('end', resolve);
    reverseStream.on('error', () => reject(new Error('FS operation failed')));
    process.stdin.on('error', () => reject(new Error('FS operation failed')));
  });
};

await transform();
