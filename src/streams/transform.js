import { Transform } from 'stream';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    const reverseTransform = new Transform({
      transform(block, encoding, callback) {
        const reversedInput = block.toString().split('').reverse().join('');
        this.push(reversedInput);
        callback();
      }
    });
    reverseTransform.write(input);
    reverseTransform.pipe(process.stdout);
  }
});