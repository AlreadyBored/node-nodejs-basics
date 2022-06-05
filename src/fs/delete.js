import fs from 'fs/promises'
import path, {resolve} from 'path'

export const remove = async () => {
    fs.access(path.resolve('src','fs','files','fileToRemove.txt'))
    .then(()=>{
        fs.rm(resolve('src','fs','files','fileToRemove.txt'))
            .then(()=>{
                console.log('deleted file fileToRemove.txt')
            })
    })
    .catch(err=>{
        console.log(new Error('FS operation failed'))
    })
};
remove()