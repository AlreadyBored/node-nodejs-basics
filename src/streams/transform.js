import { Transform } from 'stream';

const transform = async () => {
    const reverseStringTr = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join('') + '\n');
            callback();
        }
    });
    
    process.stdin.pipe(reverseStringTr).pipe(process.stdout);
};

await transform();