import { Transform } from 'node:stream';
import { stdin, stdout } from 'process';
import { pipeline } from 'stream';

const transform = async () => {
  const reversible_stream = new Transform({
    transform(chunk, _, callback) {
      callback(null, String(chunk).split('').reverse().join(''));
    },
  });

  pipeline(stdin, reversible_stream, stdout, () => {});
};

await transform();
