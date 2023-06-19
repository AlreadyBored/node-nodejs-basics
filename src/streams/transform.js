import { Transform } from 'stream';

const transform = async () => {
    const input = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.reverse().toString() + '\n');
          callback();
        }
      });
      
      process.stdin.pipe(input).pipe(process.stdout);
};

await transform();