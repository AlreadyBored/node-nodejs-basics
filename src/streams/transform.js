import {Transform} from 'stream';

const REMOVE_LINE_BREAK = true;

class ReverseStream extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const result = chunk.toString()
        .split('')
        .reverse()
        .join('')
        .substring(REMOVE_LINE_BREAK ? 1 : 0)
        .concat(REMOVE_LINE_BREAK ? '\n' : '');
      callback(null, result);
    } catch (e) {
      callback(e);
    }
  }
}

const transform = async () => {
  const transformStream = new ReverseStream({highWaterMark: 2});
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
