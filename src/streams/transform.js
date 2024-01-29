import {Transform, pipeline} from 'stream';

const transform = async () => {
    // Write your code here 
    const {stdin, stdout} = process;
    const transformStream = new Transform({
      transform(chunk, enc, cb) {
        const stringChunk = chunk.toString().trim();
        const reversed = stringChunk.split('').reverse().join('');
        this.push(reversed + '\n');
        cb();
      }
    })

    pipeline(stdin, transformStream, stdout, (err) => {
      console.error(err);
    });
};

await transform();