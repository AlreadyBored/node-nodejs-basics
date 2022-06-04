import fs, { createWriteStream } from 'fs'
import zlib from 'zlib'

export const decompress = async () => {
    const unzip = zlib.createUnzip()
    const readStream = fs.createReadStream('./src/zip/files/archive.gz')
    const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt')

    writeStream.on('close', () => {
        fs.rm('./src/zip/files/archive.gz', (err) => {
            if(err) throw new Error('Failde')
        })  
    })
    
    readStream.pipe(unzip).pipe(writeStream)
};

decompress()