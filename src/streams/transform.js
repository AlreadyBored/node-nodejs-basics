import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      this.push(reversedChunk);
      callback();
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
