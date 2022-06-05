import * as fs from 'fs'

const folderToScan = "./src/fs/files"

const targetError = function () {
    throw new Error("FS operation failed")
}


export const list = async () => {
    return fs.readdir(folderToScan, (err, fileList) => {
        err && err.code == "ENOENT" ? targetError() : console.log(fileList)
    })
};
list()