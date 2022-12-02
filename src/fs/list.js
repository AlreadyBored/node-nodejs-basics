import { promises as fs } from 'fs'

export const list = async() => {
    fs.readdir('./files')
        .then((files) => console.log(files))
        .catch((err) => {
            console.log('FS operation failed ' + err);
        });
};
list();