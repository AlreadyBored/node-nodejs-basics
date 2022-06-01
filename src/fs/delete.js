import { getFileDirName } from '../utils/utils.js'
import { rm } from 'fs/promises'
import { join } from 'path'

export const remove = async () => {
    try {
        const [__filename, __dirname] = await getFileDirName(import.meta.url)
        const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt')
        try { 
            await rm(fileToRemovePath) 
        }
        catch(err) {
            throw new Error('FS operation failed')
        }
    }
    catch(err) {
        console.error(err)
    }
}

remove()
