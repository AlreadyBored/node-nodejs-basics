import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    }
  });

  pipeline(
    process.stdin,
    reverseStream,
    process.stdout,
    (err) => {
      if (err) {
        console.error('Pipeline failed:', err);
      } else {
        console.log('\nTransformation completed.');
      }
    }
  );
};

await transform();
