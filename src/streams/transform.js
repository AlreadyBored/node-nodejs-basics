import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const str = Array.from(chunk.toString('utf8')).reverse().join('');
      callback(null, str);
    },
    encoding: 'utf8',
  });

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
