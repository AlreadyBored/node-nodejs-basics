import { getFileDirName } from '../utils/utils.js'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const read = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const filePath = join(__dirname, 'files', 'fileToRead.txt')
        try {
            const read = await readFile(filePath, 'utf-8')
            console.log(read)
        }
        catch(err) {
            throw new Error('FS operation failed')
        }
    }
    catch(err) {
        console.error(err)
    }
}

read()
