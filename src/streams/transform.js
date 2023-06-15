import { Transform } from 'stream';

const transform = async () => {
    const reverseTextTransform = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.toString().split('').reverse().join(''));
          callback();
        }
    });
    
    process.stdin.pipe(reverseTextTransform).pipe(process.stdout);
};

await transform();