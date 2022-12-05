import { Transform } from 'node:stream';

const reverseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split('').reverse().join(''));
    this.push('\n');
    callback();
  }
});


const transform = async () => {
    // Write your code here 
    process.stdin
        .pipe(reverseTr)
        .pipe(process.stdout)
};

await transform();
