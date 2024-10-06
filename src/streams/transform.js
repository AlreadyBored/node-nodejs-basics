import __dirname from './__dirname.js';
import { Transform } from 'node:stream';

class MyTransformStream extends Transform {
  _transform(data, encoding, callback) {
    callback(null, data.reverse() + '\n');
  }
}

const transformStream = new MyTransformStream();

const transform = async () => {
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
