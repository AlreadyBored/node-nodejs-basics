import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().trim().split('').reverse().join('');
      this.push(`${reversedChunk}\n`);
      callback();
    }
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
