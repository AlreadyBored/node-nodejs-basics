import { rm } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const remove = async () => {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt')

    try {
        await rm(filePath)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();
