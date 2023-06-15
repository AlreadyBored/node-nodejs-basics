import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
          const reversedText = chunk.toString().split('').reverse().join('');
          this.push(reversedText);
          callback();
        },
      });
      process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();