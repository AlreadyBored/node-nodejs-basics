import { rename as rn } from 'fs';
import { access } from 'fs';

const rename = async () => {
    // Write your code here 
    access('./src/fs/files/wrongFilename.txt', error => {
        if (error) {
            console.log('FS operation failed')
        } else {
            rn('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', err => {
                if (err) console.log('FS operation failed')
                console.log('Rename complite!')
            })
        }
    })



};

await rename();