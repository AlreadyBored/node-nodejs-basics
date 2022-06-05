import * as fs from 'fs'

const tartetFile = "./src/fs/files/wrongFilename.txt"
const targetFilename = "./src/fs/files/properFilename.md"

const targetError = function () {
    throw new Error("FS operation failed")
}

export const rename = async () => {
    // 1) Проверяем есть ли таргет файл. 
    return fs.access(tartetFile, err => {
        err && err.code == "ENOENT" ? targetError()
            // 2) Проверяем есть ли таргет файл
            : fs.access(targetFilename, err => {
                err = null ? targetError()
                    // 3) Если файла нет то переименуем
                    : fs.rename(tartetFile, targetFilename, err => {
                        if (err) throw err
                    })
            })
    })
};
rename()