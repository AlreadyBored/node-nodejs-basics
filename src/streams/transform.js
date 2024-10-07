import { dirname } from 'path'
import { Transform, pipeline } from 'stream'
import { fileURLToPath } from 'url'
import { EOL } from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const transform = async () => {
    const path = `${__dirname}/files`
    const revert = new Transform({
        transform(chunk, encoding, callback) {
            callback(
                null,
                chunk.toString().replace(EOL, '').split('').reverse().join('') +
                    EOL
            )
        },
    })

    pipeline(process.stdin, revert, process.stdout, (err) => {
        console.log('Operation failed')
    })
}

transform()
