import { Transform } from 'stream';
const { stdin, stdout } = process;

const transform = async () => {
    const reverse = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join('').trim() + '\n');
        callback();
      }
    });
    stdin.pipe(reverse).pipe(stdout);
};

await transform();