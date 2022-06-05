import fs from 'fs';
import { constants } from 'fs'
import path from 'path';

export const copy = async () => {
    const __dirname = path.resolve()
    const pathFiles = path.resolve(__dirname,'src','fs','files')
    const pathFilesCopy = path.resolve(__dirname,'src','fs','files_copy')
    fs.promises.access(pathFilesCopy,constants.F_OK).then(()=>{
        console.log(new Error('FS operation failed'))
    }).catch((err)=>{
        fs.promises.readdir(pathFiles)
            .then((data)=>{
                fs.promises.mkdir(pathFilesCopy)
                return data
            })
            .then((data) =>{
                data.forEach(file =>{
                    fs.readFile(pathFiles+path.sep+file,{encoding:'utf-8'},(err,text,i)=>{
                        if(err) return console.log(err)
                        fs.promises.writeFile(pathFilesCopy+path.sep+file,text)
                    })
                })
            })
    })
};
copy()