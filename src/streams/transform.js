// implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform, pipeline } from 'node:stream'

const transform = async () => {
    const transform = new Transform({
        transform(chunck, encoding, callback) {
            const reversedChunk = chunck
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');
            this.push(reversedChunk)
            callback()
        }
    })
    pipeline(
        process.stdin,
        transform,
        process.stdout,
        (err) => console.log(err)
    )
};

await transform();