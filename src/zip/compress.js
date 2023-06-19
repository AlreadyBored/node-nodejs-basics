import fs from 'fs'
import zlib, { gzip } from 'zlib'
const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt')
    const writeStream = fs.createWriteStream('archive.gz')
    const gzip = zlib.createGzip()

    readStream.pipe(gzip).pipe(writeStream)
    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            console.log('file compressed succsessfully')
            resolve()
        })
        writeStream.on('error', (error) => {
            console.error('Error compressing file:', error);
            reject(error)
        })
    })
};

await compress();