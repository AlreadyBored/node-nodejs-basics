import { Transform } from 'node:stream';

const transform = async () => {
  const stream = new Transform({
    transform(chunk, _, callback) {
      const reversed = [...chunk.toString()].reverse().join('');
      this.push(reversed);
      callback();
    },
  });

  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
