import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { rm } from 'node:fs/promises'

const remove = async () => {
    const fileToDelete = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToRemove.txt'
    )
    await rm(fileToDelete).catch((err) => {
        throw new Error('FS operation failed')
    })
}

await remove()
