import { getFileDirName } from '../utils/utils.js'
import { createReadStream } from 'fs'
import { join } from 'path'

export const read = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const fileToRead = join(__dirname, 'files', 'fileToRead.txt')
        const stream = createReadStream(fileToRead, 'utf-8')

        stream.pipe(process.stdout)
    }
    catch(err) {
        console.error(err)
    }
}

read()
