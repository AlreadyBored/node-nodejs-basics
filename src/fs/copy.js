import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const copy = async () => {
    const sourcePath = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const destinationPath = join(
        dirname(fileURLToPath(import.meta.url)),
        'files_copy'
    )
    const files = await readdir(sourcePath).catch((err) => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    })
    await mkdir(destinationPath).catch((err) => {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed')
        }
    })
    for (let file of files) {
        await copyFile(join(sourcePath, file), join(destinationPath, file))
    }
}

await copy()
