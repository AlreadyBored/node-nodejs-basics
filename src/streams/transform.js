import { Transform } from 'node:stream';

const reverseText = new Transform({
  transform(chunk, encoding, callback) {
    const reversed = chunk.toString().split('').join('-');

    callback(null, reversed);
  }
});
const transform = async () => {
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
