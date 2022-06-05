//Импорт
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

export const rename = async () => {
    //Указываем пути
    const dir = path.resolve(__dirname);
    const dir1 = (dir+"/wrongFilename.txt");
    const dir2 = (dir+"/properFilename.md");

    fs.access(((dir1)), function(error){ // Проверяем существует ли файл
        if (error) { //Если нет то выводис ошибку
            console.log("FS operation failed");
        } else { // Иначе
            fs.access(((dir2)), function(error){ //Проверяем существуетли второй файл
                if (error) { //Если нет то
                    try { 
                        fsp.rename(dir1, dir2) //Переименновываем
                    } catch (ex) {
                        console.log("FS operation failed"); //В случае ошибки выводим сообщение об ошибке
                    }
                } else { //Иначе
                    console.log("FS operation failed");
                }
            });
        }
    });
};
