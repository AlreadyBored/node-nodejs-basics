import { promises as fs } from 'fs'

export const read = async() => {
    fs.readFile('./files/fileToRead.txt')
        .then((data) => console.log(data.toString()))
        .catch((err) => {
            console.log('FS operation failed ' + err);
        });
};
read();