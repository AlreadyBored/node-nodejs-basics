import { promises as fs } from 'fs'

export const rename = async() => {
    fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
        .then(() => console.log('Rename comlete!'))
        .catch((err) => {
            console.log('FS operation failed ' + err);
        });
};
rename();