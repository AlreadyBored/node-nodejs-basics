import { rm } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const remove = async () => {
    const path = `${__dirname}/files/fileToRemove.txt`
    const errorMessage = 'FS operation failed'

    try {
        await rm(path)
    } catch (error) {
        throw new Error(errorMessage)
    }
}

remove()
