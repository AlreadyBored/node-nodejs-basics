import * as fs from 'fs'


export const write = async () => {
    process.stdin
        .pipe(fs.createWriteStream('./files/fileToWrite.txt'))
}
