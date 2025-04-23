import { Transform } from 'stream';

const transform = async () => {
    process.stdin.read()
    process.stdin.pipe(reverseStr()).pipe(process.stdout)
};
function reverseStr() {
    return new Transform({
        transform(chunk, encoder, callback){
            callback(null, chunk.toString().split('').reverse().join(''))
        }
    })
}
await transform();