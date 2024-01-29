import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedText = chunk.toString().split('').reverse().join('');
        this.push(reversedText);
        callback();
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout)
};



await transform();
