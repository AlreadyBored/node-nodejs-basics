import { Transform } from 'stream';

const transform = async () => {

  class ReverseTextStream extends Transform {
    _transform(chunk, encoding, callback) {

      const reversed = chunk.toString().split('').reverse().join('');

      callback(null, reversed);
    }
  }
  const reverseTextStream = new ReverseTextStream();
  
  process.stdin.pipe(reverseTextStream).pipe(process.stdout);
};

await transform();