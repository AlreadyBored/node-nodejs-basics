import fs from 'fs'
import path from 'path'

export const rename = async () => {
    const oldFile = path.resolve('src','fs','files','wrongFilename.txt')
    const newFile = path.resolve('src','fs','files','properFilename.md')

    fs.promises.access(oldFile,fs.constants.F_OK).then(()=>{
        fs.promises.access(newFile,fs.constants.F_OK).then(()=>{
            console.log(new Error('FS operation failed'))
        })
        .catch(err=>{
            fs.promises.rename(oldFile,newFile).then(()=>{
                console.log('rename')
            }).catch(err =>{
                console.log(err)
            })
        })

    })
    .catch(err=>{
        console.log(new Error('FS operation failed'))
    })
};
rename()