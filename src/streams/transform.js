import { Transform } from 'stream'


export const transform = async () => {
    process.stdin
        .pipe(new Transform({
            transform (data, encoding, callback) {
                this.push(data.toString().split('').reverse().join(''))
                callback()
            }
        }))
        .pipe(process.stdout)
}
