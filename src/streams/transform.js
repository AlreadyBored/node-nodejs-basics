import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const reverseString = str => str.split('').reverse().join('')

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            const string = chunk.toString();
            callback(null, reverseString(string))
        },
    });

    await pipeline(process.stdin, transformStream, process.stdout)

};

await transform();
