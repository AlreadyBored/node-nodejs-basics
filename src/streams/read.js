import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createReadStream } from 'node:fs'
import { stdout } from 'node:process'

const read = async () => {
    const fileToRead = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToRead.txt'
    )
    let readStream = createReadStream(fileToRead)
    readStream.on('open', () => readStream.pipe(stdout))
}

await read()
