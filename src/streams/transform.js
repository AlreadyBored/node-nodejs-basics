//transform.js- реализовать функцию, которая считывает данные из process.stdin, переворачивает текст с помощью Transform Stream и затем записывает его в process.stdout
import { Transform } from 'stream';
const transform = async () => {
    return new Promise((resolve, reject) => {
        const reverseStream = Transform({
            transform(chunk, encoding, callback) {
                const reverseChunk = chunk.toString().split('').reverse().join('')
                this.push(reverseChunk)
                callback()
            }
        })
        process.stdin.pipe(reverseStream).pipe(process.stdout)
        process.stdin.on('error', (err) => {
            resolve()
        })
        process.stdout.on('error', (err) => {
            reject(err)
        })
    })
}
await transform();