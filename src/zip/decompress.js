import * as fs from 'fs'
import * as zlib from 'zlib'


export const decompress = async () => {
    fs.createReadStream('./files/archive.gz')
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream('./files/fileToCompress.txt'))
}
