import { readFile, access } from 'fs';

const read = async () => {
    // Write your code here 
    access('./src/fs/files/fileToRead.txt', error => {
        if (error) {
            console.log('FS operation failed')
        } else {
            readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
                if (err) throw err
                console.log(data)
            })
        }
    })
};

await read();