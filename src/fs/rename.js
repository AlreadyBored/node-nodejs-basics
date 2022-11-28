import { dirname, join } from 'node:path'
import { access, rename as renameFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const rename = async () => {
    const oldFileName = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'wrongFilename.txt'
    )
    const newFileName = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'properFilename.md'
    )
    const exist = async (fileName) => {
        try {
            await access(fileName)
            return true
        } catch (err) {
            return false
        }
    }
    if (await exist(newFileName)) {
        throw new Error('FS operation failed')
    } else {
        await renameFile(oldFileName, newFileName).catch((err) => {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed')
            }
        })
    }
}

await rename()
