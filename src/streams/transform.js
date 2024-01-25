import { Transform } from 'node:stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chunk.reverse()}\n`);
      callback();
    },
  });
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
