import { Transform } from 'stream';

const transform = async () => {
  const trasformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });
  process.stdin.pipe(trasformStream).pipe(process.stdout);
};

await transform();
