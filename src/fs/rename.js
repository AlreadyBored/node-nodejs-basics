import { getFileDirName } from '../utils/utils.js'
import fs from 'fs/promises'
import { join } from 'path'

export const rename = async () => {
    try {
        const [__filename, __dirname] = await getFileDirName(import.meta.url)
        const oldFilePath = join(__dirname, 'files', 'wrongFilename.txt')
        const newFilePath = join(__dirname, 'files', 'properFilename.txt')
        try {
            await fs.rename(oldFilePath, newFilePath)
        }
        catch(err) {
            throw new Error('FS operation failed')
        }
    }
    catch(err) {
        console.error(err)
    }
}

rename()
