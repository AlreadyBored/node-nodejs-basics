import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const input = chunk.toString();
      const reversed = input.split('').reverse().join('');
      this.push(reversed);
      callback();
    }
  });

  return new Promise((resolve, reject) => {
    reverseTransform.on('error', (error) => {
      console.error(`Error: ${error.message}`);
      reject(error);
    });

    process.stdin
      .pipe(reverseTransform)
      .pipe(process.stdout);

    process.stdin.on('end', resolve);

    process.stdin.on('close', resolve);
  });
};

await transform();
