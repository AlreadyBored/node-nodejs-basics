import fs from 'fs/promises'
import path from 'path'

export const read = async () => {
    fs.access(path.resolve('src','fs','files','fileToRead.txt'))
        .then(()=>{
            fs.readFile(path.resolve('src','fs','files','fileToRead.txt'),{encoding:'utf-8'})
                .then((data)=>{
                    console.log(data)
                })
        })
        .catch(err=>{
            console.log(new Error('FS operation failed'))
        })
};
read()