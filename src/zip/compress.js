import { getFileDirName } from '../utils/utils.js'
import { join } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import { promisify } from 'util'
import { pipeline } from 'stream'
import { createGzip } from 'zlib'

export const compress = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const pipe = promisify(pipeline)
    
        const sourcePath = join(__dirname, 'files', 'fileToCompress.txt')
        const destinationPath = join(__dirname, 'files', 'archive.gz')
    
        const source = createReadStream(sourcePath, 'utf-8')
        const destination = createWriteStream(destinationPath)
        const gzip = createGzip()
    
        await pipe(source, gzip, destination)
    }
    catch(err) {
        console.error(err)
    }

}

compress()
