import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { stdin } from 'node:process'
import { createWriteStream } from 'node:fs'

const write = async () => {
    const fileToWrite = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToWrite.txt'
    )
    const streamToWrite = createWriteStream(fileToWrite)
    stdin.pipe(streamToWrite)
}

await write()
