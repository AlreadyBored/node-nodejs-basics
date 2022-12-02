import { promises as fs } from 'fs'

export const remove = async() => {
    fs.unlink('./files/fileToRemove.txt')
        .then(() => console.log('Delete comlete!'))
        .catch((err) => {
            console.log('FS operation failed ' + err);
        });
};
remove();