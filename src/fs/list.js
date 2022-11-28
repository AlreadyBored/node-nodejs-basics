import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const list = async () => {
    const sourcePath = join(dirname(fileURLToPath(import.meta.url)), 'files')

    const files = await readdir(sourcePath).catch((err) => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    })
    console.log(files)
}

await list()
