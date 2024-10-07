import { Transform } from 'stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const reverseArr = chunk.toString().split('');
      const result = reverseArr.slice(0, reverseArr.length -2).reverse().join('');
      callback(null, result + '\n');
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();