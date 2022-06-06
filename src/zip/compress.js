import * as fs from 'fs'
import * as zlib from 'zlib'

export const compress = async () => {
    fs.createReadStream('./files/fileToCompress.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('./files/archive.gz'))
}
