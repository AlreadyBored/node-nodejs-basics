//"Импорт"
const fs = require("fs");
const fsp = require("fs/promises");
//Указываем пути
const path = require("path");
const dir = path.resolve(__dirname);
const folderPath = (dir+"/files");
//Переменные
var dirs1 = [];
var dirs2 = [];
dirwalk = true;

//Функция для праверки являеться ли фалом указанный путь
function isFile(fileName) {
    return fs.lstatSync(fileName).isFile()
}

export const copy = async () => {
    fs.access(((dir+"/files_copy")), function(error){ //проверяем существует ли папка
        if (error) {//Если нет выполняем код

            fsp.mkdir((dir+"/files_copy")); //создаём папку

            var target = fs.readdirSync(folderPath).map(fileName => {return path.join(folderPath, fileName)}); //Читаем содержимое папки

            for (let i=0; i<target.length; i++) { //проходимся по содержимому
                if (isFile(target[i])) { //Если поподаеться файл копируем
                    fsp.copyFile(target[i], (dir+"/files_copy/"+path.basename(target[i])));
                } else { //Иначе пополняем массив папок
                    dirs1.push(target[i]);
                }
            }
            
            while (true) { //Цикл проходящийся по папкам в нутри files
                for (let i=0; i<dirs1.length; i++) { // Дальше работает аналогично первому циклу
                    fsp.mkdir(dir+"/files_copy/"+(dirs1[i].split('files')[1]))
                    var Dtarget = fs.readdirSync((dirs1[i])).map(fileName => {return path.join((dirs1[i]), fileName)});

                    for (let i=0; i<Dtarget.length; i++) {
                        if (isFile(Dtarget[i])) {
                            fsp.copyFile(Dtarget[i], (dir+"/files_copy/"+((Dtarget[i].split('files')[1]))));
                        } else {
                            dirs2.push(Dtarget[i]);
                        }
                    }

                }
                if (dirs2.length == 0) {//Если папок больше нет прерываем и выводим все файлы
                    break;
                } else { //Иначе проходимся по новым папкам
                    dirs1 = dirs2;
                    dirs2 = [];
                }
            }
        } else { //Иначе выводим ошибку
            console.log("FS operation failed");
        }
    });
};
copy();
