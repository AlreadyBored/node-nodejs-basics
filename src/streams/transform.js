import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const transform = async () => {
    const reversed = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse())
        }
    })
    await pipeline(process.stdin, reversed, process.stdout)
};

await transform();
