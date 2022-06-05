import * as fs from 'fs'

const fileToRead = "./src/fs/files/fileToRead.txt"
const readOptions = {
    encoding: 'utf-8'
}

const targetError = function () {
    throw new Error("FS operation failed")
}

export const read = async () => {
    fs.access(fileToRead, err => {
        err && err.code == "ENOENT" ? targetError() : fs.readFile(fileToRead, readOptions, (err, data) => {
            if (err) throw err
            console.log(data)
        })
    })
};
read()