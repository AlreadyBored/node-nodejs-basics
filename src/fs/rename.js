import { rename } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const renameFunc = async () => {
    const oldPath = `${__dirname}/files/wrongFilename.txt`
    const newPath = `${__dirname}/files/properFilename.md`
    const errorMessage = 'FS operation failed'

    try {
        await rename(oldPath, newPath)
    } catch (error) {
        throw new Error(errorMessage)
    }
}

renameFunc()
