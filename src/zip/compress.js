import fs from 'fs'
import zlib from 'zlib'

export const compress = async () => {
    const gzip = zlib.createGzip()
    const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt')
    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz')

    writeStream.on('close', () => {
        fs.rm('./src/zip/files/fileToCompress.txt', (err) => {
            if(err) throw new Error('Failde')
        })  
    })
    
    readStream.pipe(gzip).pipe(writeStream)
};

compress()