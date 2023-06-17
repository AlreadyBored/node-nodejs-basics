import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    try {
        process.stdin.setEncoding('utf-8');
        process.stdout.setEncoding('utf-8');

        class ToReverse extends Transform {
            _transform(chunk, encoding, callback) {
                this.push(chunk.toString().split("").reverse().join("") + '\n');
              callback();
            }
        }        
        const toReverse = new ToReverse();
        
        process.stdin.pipe(toReverse).pipe(process.stdout);
    } catch (error) {
        console.log(error.message); 
    }
};

await transform();