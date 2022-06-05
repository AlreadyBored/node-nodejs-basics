import { getFileDirName } from '../utils/utils.js'
import { readdir } from 'fs/promises'
import { join } from 'path'

export const list = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const filesDirPath = join(__dirname, 'files')
        try {
            const filesFromDir = await readdir(filesDirPath)
            for (let file of filesFromDir) console.log(file)
        }
        catch(err) {
            throw new Error('FS operation failed')
        }
    }
    catch(err) {
        console.error(err)
    }
}

list()
