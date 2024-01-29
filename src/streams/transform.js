import { Transform }from 'stream';

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });

  console.log(
    "Please enter text to reverse. Press 'Ctrl + D' to end the input."
  );

  process.stdin
    .pipe(reverseTransform)
    .pipe(process.stdout);
};

await transform();