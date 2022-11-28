import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

const { createHash } = await import('node:crypto')

const calculateHash = async () => {
    const fileToHASH = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToCalculateHashFor.txt'
    )

    const hash = createHash('sha256')
    const input = await readFile(fileToHASH)
    hash.update(input)
    const hex = hash.digest('hex')
    console.log(hex)
}

await calculateHash()
