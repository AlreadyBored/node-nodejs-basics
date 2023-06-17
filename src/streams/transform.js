import { Transform } from 'stream';

const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, encoding, callback) {
        const reversedText = chunk.toString().split('').reverse().join('');
        this.push(reversedText);
        callback();
      },
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    process.stdin.on('error', (error) => {
      console.error('Error reading input:', error.message);
    });

    process.stdout.on('error', (error) => {
      console.error('Error writing output:', error.message);
    });
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await transform();
