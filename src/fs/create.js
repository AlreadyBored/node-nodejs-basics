import fs from 'fs';
import { constants } from 'fs'
import { resolve } from 'path';

export const create = async () => {
    const __dirname = resolve()
    fs.promises.access(resolve(__dirname,'src','fs','files','fresh.txt'),constants.F_OK).then(()=>{
        console.log(new Error('FS operation failed'));
    }).catch(()=> {
        fs.writeFile(resolve(__dirname,'src','fs','files','fresh.txt'),'I am fresh and young',(err)=>{
            if(err) return console.log(err)
            console.log('file create')
        })
    })
};
create()