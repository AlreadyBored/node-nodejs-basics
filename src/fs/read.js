import fs from 'fs'

export const read = async () => {
    fs.readFile('./src/fs/files/fileToRead.txt', 'utf-8', (err, data) => {
        if(err) throw new Error('Failed')
        console.log(data)
    })
};

read()