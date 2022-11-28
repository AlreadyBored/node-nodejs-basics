import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

const read = async () => {
    const fileToRead = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToRead.txt'
    )
    const result = await readFile(fileToRead, { encoding: 'utf8' }).catch(
        (err) => {
            throw new Error('FS operation failed')
        }
    )
    console.log(result)
}

await read()
