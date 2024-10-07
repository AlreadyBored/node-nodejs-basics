import { readdir } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const list = async () => {
    const path = `${__dirname}/files`

    const errorMessage = 'FS operation failed'

    try {
        const files = await readdir(path)

        console.log(files)
    } catch (error) {
        throw new Error(errorMessage)
    }
}

list()
