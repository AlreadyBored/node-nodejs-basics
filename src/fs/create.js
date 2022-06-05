/***
 * Имплементация пользовательского класса Error
 */
class AppUserError extends Error {
    constructor(_message, _code) {
        super(_message); //конструктор предка
        this.name = "AppUserError"; //переопределение имени типа
        this.Code = _code || 0; //поле с кодом ошибки
    }
}

import { open } from 'fs/promises';
//const PATH_FILE = 'c:\\Learn\\node-nodejs-basics\\src\\fs\\files\\my-test.txt'; //путь к файлу
const PATH_FILE = '.\\src\\fs\\files\\my-test.txt'; //путь к файлу
const OPENING_MODE = 'w+'; //режим в котором будем открывать файл, при данном режиме при отсутствии файла он создается

/**
 * Функция создает файл в соответствии с переданным параметром
 */
export const create = async () => {
    // Write your code here
    try {
        await open(PATH_FILE, OPENING_MODE); //создать файл
        console.log(`Debugging information: `);
            console.log(`     file created.Path - ${PATH_FILE}`);
    } catch (error) {
            console.log(error);
                throw new AppUserError('Failed to create a file !', 1);       
    }
};
/***************************СЕКЦИЯ RUN ДЛЯ ПРОВЕРКИ****************** */
create();






