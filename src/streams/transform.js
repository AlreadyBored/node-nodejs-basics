import { Transform } from 'stream';

const transform = async () => {
  let leftover = '';

  const reverseLineTransform = new Transform({
    transform(chunk, encoding, callback) {
      const input = leftover + chunk.toString();
      const lines = input.split('\n');

      leftover = lines.pop();

      const reversedLines = lines.map(line => line.split('').reverse().join('')).join('\n') + '\n';
      callback(null, reversedLines);
    },
    flush(callback) {
      if (leftover) {
        const reversed = leftover.split('').reverse().join('');
        callback(null, reversed + '\n');
      } else {
        callback();
      }
    }
  });

  try {
    process.stdin
      .pipe(reverseLineTransform)
      .pipe(process.stdout);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await transform();
