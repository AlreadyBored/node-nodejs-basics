import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const readable = process.stdin;
  const writeable = process.stdout;

  const transformInstance = new Transform({
    transform(chunk, enc, cb) {
      const chungStringified = chunk.toString().trim();
      const reverseChunk = chungStringified.split('').reverse().join('');
      this.push(reverseChunk + '\n');

      cb();
    }
  })

  pipeline(readable, transformInstance, writeable, err => {
    console.log(`Error: ${err}`);
  })
};

await transform();