/***
 * Имплементация пользовательского класса Error
 */
class AppUserError extends Error {
    constructor(_message, _code) {
        super(_message); //конструктор предка
        this.name = "AppUserError"; //переопределение имени типа
        this.Code = _code || 2; //поле с кодом ошибки
    }
}

import { readdir }      from 'fs/promises';
import { access }       from 'fs/promises';
import { cp }           from 'fs/promises';
import { constants }    from 'fs';
import { copyFile } from 'fs/promises';


const NAME_OUT_DIR = '.\\src\\fs\\files_copy\\'; //директории - приемник файлов
const NAME_IN_DIR = '.\\src\\fs\\files\\'; // директория - источник файлов

export const copy = async () => {
    // Write your code here 


    //проверить наличие источника и получателя
    let flag_in = false; //флаг наличия источника
    let flag_out = false; //флаг наличия приемника
    
    //проверить наличие источника
    try {
        flag_in =  await access(NAME_IN_DIR, constants.R_OK | constants.W_OK);
            console.log('#flag_in - can access');
    } catch {
            console.error('#flag_in - cannot access');
    }

    //получить список файлов источника
    try {
        const arr_files = await readdir(NAME_IN_DIR);
            var set_files = new Set(arr_files);
            console.table(set_files);
        } catch (err) {
            console.error(err);
        }

    //поверяем наличие получателя
    try {
         flag_out = await access(NAME_OUT_DIR, constants.R_OK | constants.W_OK);
            console.log('#flag_out - can access');
    } catch {
        console.error('#flag_out - cannot access');
    }
    
    //копировать файлы из источника в получатель
    try {
        for (let file of set_files)
            {
             await copyFile(NAME_IN_DIR + file, NAME_OUT_DIR + file);
            }
    } catch {
            console.log(error);
                throw new AppUserError('Files could not be copied!', 2);
    }
    console.log('Files have been copied successfully!');
};
/***************************СЕКЦИЯ RUN ДЛЯ ПРОВЕРКИ*********************/
copy(); 