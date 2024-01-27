import { Transform } from 'stream'

const transform = async () => {
    const reverse = new Transform({
        transform(data, _, callback) {
            callback(null, data.toString().split('').reverse().join(''))
        }
    })

    process.stdin.pipe(reverse).pipe(process.stdout)
};

await transform();