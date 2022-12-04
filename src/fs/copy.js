import { cp } from 'fs'

const copy = async () => {
    cp("./files", './files_copy', { 'recursive': true, 'force': false, 'errorOnExist': true}, (err)=>{
        if (err && err.info.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        console.log('Folder copied Successfully!');
    })
}

copy();