import { Transform } from 'stream';

export const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk) {
      this.push(chunk.toString().split('').reverse().join(''));
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

transform();
