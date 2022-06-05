import fs from 'fs/promises'
import path from 'path'

export const list = async () => {
    fs.access(path.resolve('src','fs','files'))
        .then(()=>{
            fs.readdir(path.resolve('src','fs','files'))
                .then((data)=>{
                    console.log(data)
                })
        })
        .catch(err=>{
            console.log(new Error('FS operation failed'))
        })
};
list()