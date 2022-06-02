import { promises as fs } from 'fs'
import { existsSync } from 'node:fs';
import { constants } from 'fs';

export const create = async() => {
    // if (fs.access('files/fresh.txt')) {
    //     console.log('sa')
    // } else console.log('aa')

    try {
        await fs.access('files/fresh.txt', constants.F_OK);
        console.log('file exists');
    } catch {
        await fs.writeFile("files/fresh.txt", "I am fresh and young");
    }



    // fs.access('files/fresh.txt', (err) => {
    //     if (!err) {
    //         console.error('myfile already exists');
    //         return;
    //     }

    // if (existsSync('files/fresh.txt')) {
    //     console.log('Путь существует.');
    // } else
    //     fs.writeFile("files/fresh.txt", "I am fresh and young");
    //console.log(await fs.access("files/fresh.txt"))
    // try {
    //     if (fs.access("files/fresh.txt")) {
    //         fs.writeFile("files/fresh.txt", "I am fresh and young");
    //     }

    // } catch (err) {
    //     console.error(err)
    // }
}


create()


// var fs = require("fs");

// fs.unlink("filename.txt", function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Файл удалён");
//     }
// })