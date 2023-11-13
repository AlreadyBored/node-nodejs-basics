import fs from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const copy = async () => {
    const folderName = join(__dirname, 'files')
    const copiedFolderName = join(__dirname, 'files_copy')

    try {
        await fs.access(folderName)
        await fs.mkdir(copiedFolderName)
        await fs.cp(folderName, copiedFolderName, { recursive: true, force: false })
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await copy();
