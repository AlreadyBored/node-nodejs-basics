import { Transform }from 'stream';

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      // Convert chunk to string, reverse it, and pass it to the next handler
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });

  console.log(
    "Please enter text to reverse. Press 'Ctrl + D' to end the input."
  );

  process.stdin
    .pipe(reverseTransform) // Pipe input through the reverse transform
    .pipe(process.stdout); // Then pipe it to stdout
};

await transform();