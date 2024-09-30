import fs from 'fs'
const path = './src/fs/files/'
const oldname = 'wrongFilename.txt'
const newname = 'properFilename.md'


const rename = async () => {
    fs.rename( path + oldname, path + newname, (err) =>{
        if (err) {
            console.error('FS operation failed', err)
        } else {
            console.log('Renamed')
        }
    })
};

await rename();