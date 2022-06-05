//"Импорт"
const fs = require("fs");
const path = require("path");
//Задаю директории
const dir = path.resolve(__dirname);
const folderPath = (dir+"/files");
//Создание переменных
var dirs = [];
var dirs2 = [];
var files = []
dirwalk = true;


function isFile(fileName) {
    return fs.lstatSync(fileName).isFile()
}

export const list = async () => {
    fs.access(((dir+"/files")), function(error){ //Проверяем создана ли папка files
        if (error) { //Если нет то выводим ошибку
            console.log("FS operation failed");
        } else { //Если папка существует
            var target = fs.readdirSync(folderPath).map(fileName => {return path.join(folderPath, fileName)}); //читаем её содержимое

            for (let i=0; i<target.length; i++) { //проходимся по содержимому
                if (isFile(target[i])) { //Если поподаеться файл пополняем массив файлов
                    files.push(target[i]);
                } else { // Иначе пополняем массив папок
                    dirs.push(target[i]);
                }
            }
            
            while (true) { //Цикл проходящийся по папкам в нутри files
                for (let i=0; i<dirs.length; i++) { // Дальше работает аналогично первому циклу
                    var Dtarget = fs.readdirSync((dirs[i])).map(fileName => {return path.join((dirs[i]), fileName)});

                    for (let i=0; i<Dtarget.length; i++) {
                        if (isFile(Dtarget[i])) {
                            files.push(Dtarget[i]);
                        } else {
                            dirs2.push(Dtarget[i]);
                        }
                    }

                }
                if (dirs2.length == 0) {//Если папок больше нет прерываем и выводим все файлы
                    break;
                } else { //Иначе проходимся по новымпапкам
                    dirs = dirs2;
                    dirs2 = [];
                }
            }
            console.log(files);
        }
    });
};

list();
