import { writeFile } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
    const errorMessage = 'FS operation failed'
    const str = 'I am fresh and young'
    const src = `${__dirname}/files/fresh.txt`
    try {
        await writeFile(src, str, { flag: 'wx' })
    } catch (err) {
        throw new Error(errorMessage)
    }
}
create()
