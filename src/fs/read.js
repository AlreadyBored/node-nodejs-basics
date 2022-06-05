//Импорт
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");


export const read = async () => {
    //Пути
    const dir = path.resolve(__dirname);
    const dir1 = (dir+"/fileToRead.txt");

    fs.access(((dir1)), function(error){ //Проверяем существуетли файл для прочтения
        if (error) { //Если нет выводим ошибку
            console.log("FS operation failed");
        } else { //Иначе читаем содержимое
            fsp.readFile(dir1).then( (result) => {console.log(result.toString())} );
        }
    });
};

read();
