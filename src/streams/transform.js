import { pipeline, Transform } from 'stream'
const readable = process.stdin
const writable = process.stdout



const transform = async () => {
    // Write your code here 
    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkToString = chunk.toString().trim()
            const chunkReverse = chunkToString.split('').reverse().join('')
            this.push(chunkReverse + '\n')
            cb()
        }
    })

    pipeline(
        readable,
        transform,
        writable,
        err => {
            console.log(err)
        }
    )
};

await transform();