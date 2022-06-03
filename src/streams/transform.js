import { Transform } from 'stream'

export const transform = async () => {
    try {
        const reverse = new Transform({
            transform: (chunk, encoding, callback) => {
                callback(null, chunk.toString().split('').reverse().join(''))
            }
        })

        process.stdin.pipe(reverse).pipe(process.stdout)
    }
    catch(err) {
        console.error(err)
    }
}

transform()
