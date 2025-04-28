import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const input = chunk.toString().trim();
    const reversed = input.split('').reverse().join('');
    this.push(reversed + '\n');
    callback();
  },
});
        
const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
