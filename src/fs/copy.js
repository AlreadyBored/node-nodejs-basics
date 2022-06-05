import * as fs from 'fs'
const sourceFolder = "./src/fs/files"
const destinationFolder = "./src/fs/files_copy"

const targetError = function () {
    throw new Error("FS operation failed")
}

// 1) Проверяем есть ли папка через access 2) Если нет создаем ее cканим с помощью риддир, потом кажжый отдельно копируем через копиФайл.
// Чеки на ошибки по существованию папок возможно можно было сделать через ошибку в самом копи файлс
export const copy = async () => {
    return fs.access(destinationFolder, function (err) {
        err && err.code == "ENOENT" ? targetError() : fs.readdir(sourceFolder, function (err, files) {
            if (err && err.code == "ENOENT") targetError()
            files.forEach(fileName => {
                // Собираем ссылки через аналог ф-стринга
                fs.copyFile(`${sourceFolder}/${fileName}`, `${destinationFolder}/${fileName}`, err => {
                    if (err) throw err
                })
            })
        })
    })
};
copy()