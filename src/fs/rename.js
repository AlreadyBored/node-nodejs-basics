import { rename } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const rename = async () => {
    const oldFileName = join(__dirname, 'files', 'wrongFilename.txt')
    const newFileName = join(__dirname, 'files', 'properFilename.md')

    try {
        await rename(oldFileName, newFileName)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

rename();
