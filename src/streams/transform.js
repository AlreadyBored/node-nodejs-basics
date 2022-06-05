import { Transform } from 'stream'

export const transform = async () => {
    const revert = new Transform({
        transform(chunk) {
            this.push(chunk.toString().split('').reverse().join(''))
        }
    })

    process.stdin.pipe(revert).pipe(process.stdout)
};

transform()