import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';

const input = stdin;
const output = stdout;

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, enc, cb) {
      const reversed = chunk.toString().trim().split('').reverse().join('');
      cb(null, reversed + '\n');
    },
  });
  pipeline(input, transformStream, output, (err) => {
    throw new Error('Error:', err);
  });
};

await transform();
