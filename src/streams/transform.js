import { Transform } from 'stream';

class ReverseTransform extends Transform {
    _transform(chunk, _encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('')
        this.push(reversedChunk)
        callback()
    }
}

const reverseTransformStream = new ReverseTransform()

const transform = async () => {
    process.stdin.pipe(reverseTransformStream).pipe(process.stdout)
};

await transform();