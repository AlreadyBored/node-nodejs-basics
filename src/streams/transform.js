import { Transform } from 'stream';

export const transform = async () => {
    const reversSen = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.toString().split("").reverse().join(""));
          callback();
        }
      });

      process.stdin.pipe(reversSen).pipe(process.stdout);
};

transform()
