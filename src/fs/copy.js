import * as fs from 'fs/promises';

export const copy = async () => {
    fs.mkdir('fs/filesCopy')
        .then(()=> fs.readdir('fs/files')
            .then((arrOfNamesFiles)=> {
                arrOfNamesFiles.map(item =>{
                    fs.copyFile(`fs/files/${item}`, `fs/filesCopy/${item}`)
                        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")));
                })
            }))
        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")))

};
//мне приснилось решение)ахах
copy()








