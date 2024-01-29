import { Transform } from 'stream';

function reverseText(chunk) {
    return chunk.split('').reverse().join('');
}

const reverseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(reverseText(chunk.toString()));
        callback();
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTransformStream).pipe(process.stdout);
};

await transform();