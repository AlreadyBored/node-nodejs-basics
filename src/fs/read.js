import fs from 'fs'
const path = './src/fs/files/'
const source = 'fileToRead.txt'

const read = async () => {
    fs.readFile(path + source, 'utf8', (err, data) => {
        if (err) {
            console.error("FS Operation failed", err)
        } else {
            console.log(data)
        }
    })
};

await read();