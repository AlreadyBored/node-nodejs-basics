import fs from 'fs'

export const list = async () => {
    fs.readdir('./src/fs/files', (err, files) => {
        if(err) throw new Error('Failed')
        console.log(files)
    })
};

list()