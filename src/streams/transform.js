import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedData = chunk.toString().split('').reverse().join('');
        callback(null, reversedData);
    }
})

const transform = async () => {
    try {
        process.stdin.pipe(reverseTransform).pipe(process.stdout);
    } catch(err) {
        console.log(err);
    }
};

await transform();