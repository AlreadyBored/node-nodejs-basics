import { stdin, stdout } from 'node:process'
import { Transform } from 'node:stream'
const transform = async () => {
    const reverser = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('') + '\n')
        },
    })
    stdin.pipe(reverser).pipe(stdout)
}

await transform()
