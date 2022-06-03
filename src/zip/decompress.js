import { getFileDirName } from '../utils/utils.js'
import { join } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import { promisify } from 'util'
import { pipeline } from 'stream'
import { createUnzip } from 'zlib'

export const decompress = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const pipe = promisify(pipeline)
    
        const sourcePath = join(__dirname, 'files', 'archive.gz')
        const destinationPath = join(__dirname, 'files', 'fileToCompress.txt')
    
        const source = createReadStream(sourcePath)
        const destination = createWriteStream(destinationPath)
        const unzip = createUnzip()
    
        await pipe(source, unzip, destination)
    }
    catch(err) {
        console.error(err)
    }
}

decompress()
