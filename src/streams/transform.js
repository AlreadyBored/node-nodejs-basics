import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {

    const transformStream = new Transform({
      transform(chunk, enc, cb) {
        try {
          const chunkString = chunk.toString().trim();
          const reverseChunk = chunkString.split('').reverse().join('');
          cb(null, reverseChunk + EOL);
        } catch (err) {
          cb(err);
        }
      },
    });
    await pipeline(process.stdin, transformStream, process.stdout);

};

await transform();
