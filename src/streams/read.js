import * as fs from 'fs'


export const read = async () => {
    fs.createReadStream('./files/fileToRead.txt')
        .pipe(process.stdout)
}
