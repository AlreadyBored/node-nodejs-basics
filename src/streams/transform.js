import { Transform } from 'node:stream';

const reversedString = (str) => [...str].reverse().join('');

const transform = async () => {
  console.log(
    'Write your data\nPress "Enter" for safe\nPress "Ctrl+C" for exit'
  );
  const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, reversedString(chunk.toString()));
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
