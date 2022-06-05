import * as fs from 'fs'

const fileToDelete = "./src/fs/files/fileToRemove.txt"

const targetError = function () {
    throw new Error("FS operation failed")
}

// На этом этапе было бы круто сделать функцию, которая будет проверять на наличе файла и импортить ее в каждый файл. Точно также с targetError
export const remove = async () => {
    return fs.access(fileToDelete, err => {
        err && err.code == "ENOENT" ? targetError() : fs.unlink(fileToDelete, err => {
            if (err) throw err
        })
    })
};
remove()