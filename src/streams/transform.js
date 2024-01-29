import { Transform } from 'node:stream';


const reverseText = new Transform({
    transform(chunk, encoding, callback) {
        callback(null,String(chunk).split("").reverse().join(""));
    }
})

const transform = async () => {
    process.stdin.pipe(reverseText).pipe(process.stdout);
}
await transform();