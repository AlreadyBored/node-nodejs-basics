import { writeFile } from 'fs/promises'
import { join } from 'path'
import { customExist, getFileDirName } from '../utils/utils.js'

export const create = async () => {
    try {
        const [__filename, __dirname] = await getFileDirName(import.meta.url)
        const errorMsg = 'FS operation failed'
        const textMsg = 'I am fresh and young'
        const newFilePath = join(__dirname, 'files', 'fresh.txt')
        const isFileExists = await customExist(newFilePath)

        if (isFileExists) throw new Error(errorMsg)
        await writeFile(newFilePath, textMsg)
    }
    catch (err) {
        console.error(err)
    }
};

create()