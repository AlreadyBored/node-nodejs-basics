import {pipeline, Transform} from 'stream'
import {EOL} from 'os'

const transform = async () => {
    const revert = new Transform({
        transform(chunk, encoding, callback) {
            const chunkContent = chunk.toString().replace(EOL, '')
            const reversedChunk = chunkContent.split('').reverse().join('')
            //
            callback(null, reversedChunk + EOL)
        }
    })
    pipeline(
        process.stdin,
        revert,
        process.stdout,
        (err) => {
            throw err
        }
    )
};

await transform();