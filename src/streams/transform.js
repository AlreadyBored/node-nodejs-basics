import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const reversedData = chunk.toString().split('').reverse().join('');
    this.push(reversedData);
    callback();
  }
});

const transform = async () => {
  return new Promise((resolve, reject) => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    process.stdin.on('error', (err) => {
      console.error('Error with stdin:', err);
      reject(new Error('FS operation failed'));
    });

    reverseTransform.on('end', () => {
      resolve();
    });
  });
};

await transform();
