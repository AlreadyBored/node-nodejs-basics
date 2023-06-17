import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;

    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            const stringChunk = chunk.toString().trim();

            const reverseChunk = stringChunk.split('').reverse().join('');

            callback(null, reverseChunk + '\n');
        }
    });

    pipeline(
      readable,
      transform,
      writable,
      (err) => {
          if (err) {
              console.error("An error occurred in pipeline.", err);
          } else {
              console.log("Pipeline execution successful");
          }
      }
    )
};

await transform();
