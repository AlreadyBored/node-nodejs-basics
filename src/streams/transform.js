import { Transform } from 'node:stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(data, encoding, callback) {
      callback(null, [...data.toString()].reverse().join(''));
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
