import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, _encoding, callback) {
          const input = chunk.toString();
          const reversed = input.split('').reverse().join('');
          this.push(reversed);
          callback();
        }
      });
      
    console.log('Enter text to reverse (Ctrl+C to stop):');

    process.stdin
    .pipe(reverseTransform)
    .pipe(process.stdout);
};

await transform();