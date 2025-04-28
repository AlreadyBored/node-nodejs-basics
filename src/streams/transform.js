import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 

    const reverser = new Transform({
        transform(chunk, encoding, callback) {
          const input = chunk.toString();
          const reversed = input.split('').reverse().join('');
          this.push(reversed + '\n');
          callback();
        }
      });
    
      process.stdin.pipe(reverser).pipe(process.stdout);

};

await transform();