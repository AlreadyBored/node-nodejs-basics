import { Transform } from 'stream';

const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);


};

await transform();