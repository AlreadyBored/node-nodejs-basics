import { Transform } from 'stream';

export const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const reverse =
        chunk.toString().split('').reverse().join('').trim() + '\n';
      callback(null, reverse);
    },
  });

  process.stdin.pipe(transform).pipe(process.stdout);
};

transform();
