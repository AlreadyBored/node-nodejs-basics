import * as fs from 'fs'
const fileLocation = './src/fs/files/fresh.txt'


export const create = async () => {
    // Создает новый файл, а если он есть ретернет ошибку. Некоторые методы могут отваливаться и некоторые когда хочется использовать не рекомендуются к примеру fs.stat в данном примере
    return fs.access(fileLocation, function (err) {
        err && err.code == "ENOENT" ? fs.writeFile(fileLocation, "I am fresh and young", (err) => !err ? console.log("Успех")
            : console.log("Ошибка в записи файла"))
            : (function () { throw new Error("FS operation failed") })()
    })
}
create()