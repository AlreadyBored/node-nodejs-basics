import { Transform } from 'node:stream';

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''))
    }
})


export const transform = async () => {
    await process.stdin.pipe(myTransform).pipe(process.stdout)
};

// transform()