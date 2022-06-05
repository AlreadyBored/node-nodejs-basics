import * as fs from 'fs'
import * as zlib from 'zlib'


export const decompress = async () => {
    fs.createReadStream('./files/archive.gz')
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream('./files/fileToCompress.txt'))
}


(async () => {
    try {
        console.log('result:' + await decompress())
    } catch (e) {
        // Deal with the fact the chain failed
        console.log('error:')
        console.log(e)
    }
})()