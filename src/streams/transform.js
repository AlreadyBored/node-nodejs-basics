import { Transform } from 'stream';

const reverseString = (str) => str.split('').reverse().join('')

const reverse = new Transform({
    transform(chunk, _encoding, callback) {
        this.push(reverseString(chunk.toString()));
        callback();
    },
  });

const transform = async () => {
    process.stdin.pipe(reverse).pipe(process.stdout)
};

await transform();