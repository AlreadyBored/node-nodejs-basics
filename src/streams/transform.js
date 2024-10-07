import { Transform } from 'stream';
const transform = async () => {
  process.stdin.setEncoding('utf8');
  const viceversa = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse('').join('') + '\n');
      callback();
    },
  });

  process.stdin.pipe(viceversa).pipe(process.stdout);
};

await transform();
