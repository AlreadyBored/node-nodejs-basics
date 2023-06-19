import { Transform, pipeline } from 'node:stream';

const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
  const reversedString = new Transform({
    transform(chunk, _, cb) {
      const chunkStringified = chunk.toString().trim();

      const reversedChunk = [...chunkStringified].reverse().join('');

      this.push(reversedChunk + '\n');

      cb();
    },
  });

  pipeline(readable, reversedString, writable, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await transform();
