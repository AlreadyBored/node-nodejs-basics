import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createReadStream } from 'node:fs'
import { stdout } from 'node:process'

const { createHash } = await import('node:crypto')

const calculateHash = async () => {
    const fileToHASH = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToCalculateHashFor.txt'
    )

    const hash = createHash('sha256')
    const input = createReadStream(fileToHASH)
    input.pipe(hash).setEncoding('hex').pipe(stdout)
}

await calculateHash()
