import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk
          .toString()
          .split('')
          .reverse()
          .join('')
      );
    }
  });

  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();