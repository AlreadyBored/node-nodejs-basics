//Импорт
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

export const remove = async () => {
    //Указываем пути
    const dir = path.resolve(__dirname);
    const target = (dir+"/fileToRemove.txt");

    fs.access(((target)), function(error){ //Проверяем существуетли файл
        if (error) { //Если нет то выводим ошибку
            console.log("FS operation failed");
        } else { //Иначе
            fsp.rm(target); // Удаляем
        }
    });
};
remove();
