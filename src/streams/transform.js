import {Transform} from 'stream'
import {  pipeline} from 'stream/promises'

const transform = async () => {
    const transformTextStream = new Transform({
              transform(chunk, encoding, callback) {
                  callback(null, chunk.toString().split('').reverse().join(''))
            },
        },
    )
    try {
        await pipeline(
            process.stdin,
            transformTextStream,
            process.stdout,
        );
        console.log('Pipeline is success')
    } catch (error) {
        throw new Error(`Pipeline failed. ${error.message}`)
    }
};

 await transform();