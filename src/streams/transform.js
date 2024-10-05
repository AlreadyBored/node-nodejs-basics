import { stdin, stdout } from 'process'
import { pipeline, Transform } from 'stream'

const transformText = new Transform({
        transform: (chunck, encoding, callback) => {
            const tranformData = `${chunck.reverse()} `
            callback(null, tranformData)
        }
    })

const transform = async () => {
    await pipeline(
        stdin,
        transformText,        
        stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed:', err);
            } else {
                console.log('Pipeline succeeded.');
            }
        }
    )
};

await transform();