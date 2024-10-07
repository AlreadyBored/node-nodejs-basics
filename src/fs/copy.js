import { readdir, mkdir, copyFile } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
    const path = `${__dirname}/files`
    const copyFiles = `${__dirname}/copyFiles`
    const errorMessage = 'FS operation failed'

    try {
        const files = await readdir(path)
        await mkdir(copyFiles)
        for (const file of files) {
            await copyFile(`${path}/${file}`, `${copyFiles}/${file}`)
        }
    } catch (error) {
        throw new Error(errorMessage)
    }
}

copy()
