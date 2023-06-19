import {Transform as TransformStream} from 'stream';

const transformReverse = () => {
    return new TransformStream({
        transform(chunk, enc, cb) {
            const splitString = chunk.toString().split('');
            const reversedInputAsArray = splitString.reverse();
            const reversedArrayAsString = reversedInputAsArray.join('');
            cb(null, reversedArrayAsString);
        }
    })
}
const transform = async () => {
    const reversed = transformReverse();

    process.stdin.pipe(reversed).pipe(process.stdout);
};

await transform();