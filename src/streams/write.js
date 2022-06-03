import { getFileDirName } from '../utils/utils.js'
import { createWriteStream } from 'fs'
import { join } from 'path'

export const write = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const fileToWrite = join(__dirname, 'files', 'fileToWrite.txt')
        const stream = createWriteStream(fileToWrite)

        process.stdin.pipe(stream)
    }
    catch(err) {
        console.error(err)
    }
}

write()
