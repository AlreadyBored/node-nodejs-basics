import { Transform } from 'stream';

const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, _, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
      },
    });

    process.stdin.pipe(reverseTransform);

    reverseTransform.pipe(process.stdout);

    console.log('Enter text to reverse (Ctrl+C to end):');
  } catch (error) {
    console.error('Error during transformation:', error.message);
  }
};

await transform();