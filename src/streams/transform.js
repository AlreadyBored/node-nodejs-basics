import { Transform, pipeline } from 'stream';
import { promisify } from 'util';

const transform = async () => {
  const pipelineAsync = promisify(pipeline);
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      this.push(reversedChunk);
      callback();
    },
  });
  await pipelineAsync(process.stdin, reverseTransform, process.stdout);
};

await transform();
