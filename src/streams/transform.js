import { Transform } from 'stream';

class ReverseTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const reversedText = chunk.toString().split('').reverse().join('');
    this.push(reversedText);
    callback();
  }
}

const transform = async () => {
  const reverseTransform = new ReverseTransform();

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on('error', (err) => {
    console.error('Error reading from process.stdin:', err);
  });

  reverseTransform.on('error', (err) => {
    console.error('Error transforming text:', err);
  });

  process.stdout.on('error', (err) => {
    console.error('Error writing to process.stdout:', err);
  });
};

await transform();