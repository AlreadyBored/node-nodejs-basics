export const create = async () => {
    //Импорт
    const fs = require("fs");
    const path = require("path");
    
    const dir = path.resolve(__dirname); //Директория
    fs.access(((dir+"/files/fresh.txt")), function(error){ //Проверяем файл на существование
        if (error) { //Если файл не существует
            fs.writeFile((dir+"/files/fresh.txt"), "I am fresh and young", function(error){ //
                if(error) { //Если произошла ошибка
                    console.log("FS operation failed");
                } else { //Иначе
                    console.log("Файл создан");
                }
            });
        } else { //Иначе
            console.log("FS operation failed");
        }
    });
};
