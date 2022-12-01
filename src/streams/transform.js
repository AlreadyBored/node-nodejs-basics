import { pipeline, Transform } from 'stream'
import { EOL } from 'os'

const transform = async () => {
    const bytesOfEOL = Buffer.from(EOL)
    const lengthBytesOfEOL = bytesOfEOL.length

    class ReverseStream extends Transform {
        _transform(chunk, encoding, callback) {
            const reverseChunk = chunk.reverse()
            const clearReverseChunk = reverseChunk.slice(lengthBytesOfEOL)
            const reverseChunkWithEOL = Buffer.concat([clearReverseChunk, bytesOfEOL])

            try {
                callback(null, reverseChunkWithEOL)
            } catch (err) {
                callback(err)
            }
        }
    }

    pipeline(process.stdin, new ReverseStream(), process.stdout, (err) => {
        err && console.error(err);
    })
};

await transform();