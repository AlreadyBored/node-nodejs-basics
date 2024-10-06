import { Transform } from 'stream';
import stream from 'stream/promises';

const formattedString = (str) => str.split('').reverse().join('');

class CustomTransformStream extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, _, cb) {
    cb(null, formattedString(chunk.toString()));
  }
}

const transform = async () => {
  const transformStream = new CustomTransformStream();

  await stream.pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
