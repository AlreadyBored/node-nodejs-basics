import * as fs from 'fs'

export const read = async () => {
    fs.readFile('./files/fileToRead.txt', (err, data) => {
        if (err) throw new Error('FS operation failed')
        console.log(data.toString('utf8'))
    })
}
