import {  Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const reverse = chunk.toString().split('').reverse().join('');
        this.push(reverse);
        callback();
    }
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
