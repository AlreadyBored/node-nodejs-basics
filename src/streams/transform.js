import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _encoding, callback) {
          const reversedChunk = chunk.toString().split('').reverse().join('');
          callback(null, reversedChunk);
        },
      });
    
      process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();